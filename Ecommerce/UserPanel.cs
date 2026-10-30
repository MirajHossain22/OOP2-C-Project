using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;

namespace Ecommerce
{
    public partial class UserPanel : Form
    {
        private List<Product> cartProducts = new List<Product>();
        private string connectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=""C:\Users\abrar\Documents\E-commerce management system.mdf"";Integrated Security=True;Connect Timeout=30;Encrypt=False";
        public UserPanel()
        {
            InitializeComponent();
            LoadProductsInShop();
            //SetupDataGridView();
            

            //dataGridViewCart.CellClick += dataGridViewCart_CellClick;
        }

       
        private void LoadProductsInShop()
        {
            
            flowLayoutPanelShop.Controls.Clear();

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                string query = "SELECT ProductId, ProductName, Price, ImagePath FROM Products";
                SqlCommand command = new SqlCommand(query, connection);
                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    int productId = (int)reader["ProductId"];
                    string productName = reader["ProductName"].ToString();
                    decimal price = (decimal)reader["Price"];
                    string imagePath = reader["ImagePath"].ToString();

                    // Create a panel for each product
                    Panel productPanel = new Panel
                    {
                        Size = new Size(200, 250),
                        BorderStyle = BorderStyle.FixedSingle,
                        Margin = new Padding(10)
                    };

                    // Create and add the product name label
                    Label lblProductName = new Label
                    {
                        Text = productName,
                        AutoSize = true,
                        Location = new Point(10, 10)
                    };
                    productPanel.Controls.Add(lblProductName);

                    // Create and add the product price label
                    Label lblProductPrice = new Label
                    {
                        Text = $"Price: {price:C}",
                        AutoSize = true,
                        Location = new Point(10, 40)
                    };
                    productPanel.Controls.Add(lblProductPrice);

                    // Create and add the product image
                    PictureBox pictureBoxProductImage = new PictureBox
                    {
                        Image = File.Exists(imagePath) ? Image.FromFile(imagePath) : null,
                        SizeMode = PictureBoxSizeMode.StretchImage,
                        Size = new Size(180, 100),
                        Location = new Point(10, 70)
                    };
                    productPanel.Controls.Add(pictureBoxProductImage);

                    // Create and add the Add to Cart button
                    Button buttonAddToCart = new Button
                    {
                        Text = "Add to Cart",
                        Location = new Point(10, 180)
                    };
                    buttonAddToCart.Click += (s, e) => AddToCart(productId, productName, price);
                    productPanel.Controls.Add(buttonAddToCart);

                    // Add the product panel to the FlowLayoutPanel
                    flowLayoutPanelShop.Controls.Add(productPanel);
                }
            }
        }

        private void AddToCart_Click(object sender, EventArgs e)
        {
            Button btn = sender as Button;
            int productId = (int)btn.Tag;

            // Logic to add the product to the cart
            MessageBox.Show($"Product {productId} added to cart!");
        }
        private void AddToCart(int productId, string productName, decimal price)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();

                // Check if the product is already in the cart
                string checkQuery = "SELECT Quantity FROM Cart WHERE ProductId = @ProductId";
                SqlCommand checkCommand = new SqlCommand(checkQuery, connection);
                checkCommand.Parameters.AddWithValue("@ProductId", productId);

                object result = checkCommand.ExecuteScalar();

                if (result != null) // Product already exists in the cart
                {
                    int currentQuantity = Convert.ToInt32(result);
                    // Update the quantity for the existing product
                    string updateQuery = "UPDATE Cart SET Quantity = @Quantity WHERE ProductId = @ProductId";
                    SqlCommand updateCommand = new SqlCommand(updateQuery, connection);
                    updateCommand.Parameters.AddWithValue("@Quantity", currentQuantity + 1);
                    updateCommand.Parameters.AddWithValue("@ProductId", productId);

                    updateCommand.ExecuteNonQuery();
                }
                else // Product doesn't exist, insert a new row
                {
                    string insertQuery = "INSERT INTO Cart (ProductId, ProductName, Price, Quantity) VALUES (@ProductId, @ProductName, @Price, @Quantity)";
                    SqlCommand insertCommand = new SqlCommand(insertQuery, connection);
                    insertCommand.Parameters.AddWithValue("@ProductId", productId);
                    insertCommand.Parameters.AddWithValue("@ProductName", productName);
                    insertCommand.Parameters.AddWithValue("@Price", price);
                    insertCommand.Parameters.AddWithValue("@Quantity", 1); // Initial quantity is 1

                    insertCommand.ExecuteNonQuery();
                }
            }

            MessageBox.Show($"{productName} has been added to the cart.");
        }




        //private void tabControlUserPanel_SelectedIndexChanged(object sender, EventArgs e)
        //{
        //    // Check if the Cart tab is selected
        //    if (tabControlUserPanel.SelectedTab == tabPageCart)
        //    {
        //        LoadCartItems();
        //    }
        //}
        private void LoadCartItems()
        {
            dataGridViewCart.Rows.Clear();

            if (dataGridViewCart.Columns.Count == 0)
            {
                dataGridViewCart.Columns.Add("ProductId", "ID");
                dataGridViewCart.Columns.Add("ProductName", "Name");
                dataGridViewCart.Columns.Add("ProductPrice", "Price");
                dataGridViewCart.Columns.Add("Quantity", "Quantity");
            }


            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                string query = "SELECT  ProductId, ProductName, Price, Quantity FROM Cart";
                SqlCommand command = new SqlCommand(query, connection);

                try
                {
                    SqlDataReader reader = command.ExecuteReader();

                    // Check if data is being read
                    if (!reader.HasRows)
                    {
                        MessageBox.Show("No items found in the cart.");
                        return;
                    }

                    while (reader.Read())
                    {
                        int productId = (int)reader["ProductId"];
                        string productName = reader["ProductName"].ToString();
                        decimal price = (decimal)reader["Price"];
                        int quantity = (int)reader["Quantity"];

                        // Add the product details to the DataGridView
                        dataGridViewCart.Rows.Add(productId, productName, price, quantity);
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show($"An error occurred: {ex.Message}");
                }

            }
        }
        //private void AddDeleteButtonColumn()
        //{
        //    if (!dataGridViewCart.Columns.Contains("Delete"))
        //    {
        //        DataGridViewButtonColumn deleteButton = new DataGridViewButtonColumn
        //        {
        //            HeaderText = "Delete",
        //            Name = "Delete",
        //            Text = "Delete",
        //            UseColumnTextForButtonValue = true
        //        };
        //        dataGridViewCart.Columns.Add(deleteButton);
        //    }
        //}




        private void ShowCart_Click(object sender, EventArgs e)
        {
            LoadCartItems();
            if (dataGridViewCart.Columns["ProductId"] != null)
            {
                dataGridViewCart.Columns["ProductId"].Visible = false;
            }

        }

        private void CalculateTotalPrice()
        {
            decimal totalPrice = 0;

            // Loop through the DataGridView rows to calculate the total price
            foreach (DataGridViewRow row in dataGridViewCart.Rows)
            {
                if (row.Cells["ProductPrice"].Value != null && row.Cells["Quantity"].Value != null)
                {
                    decimal price = Convert.ToDecimal(row.Cells["ProductPrice"].Value);
                    int quantity = Convert.ToInt32(row.Cells["Quantity"].Value);
                    totalPrice += price * quantity;
                }
            }

            MessageBox.Show($"Total Price: {totalPrice:C}");
        }


        private void Payment_Click(object sender, EventArgs e)
        {
            CalculateTotalPrice();

            dataGridViewCart.Rows.Clear();
            // Show payment options
            this.Hide();
            payment payment = new payment();
            payment.Show();
            


            //var result = payment.ShowDialog();


        }    
        

        private void buttonDeleteFromCart_Click(object sender, EventArgs e)
        {
            if (dataGridViewCart.SelectedRows.Count > 0)
            {
                // Get the ProductId of the selected row
                int selectedRowIndex = dataGridViewCart.SelectedRows[0].Index;
                int productId = Convert.ToInt32(dataGridViewCart.Rows[selectedRowIndex].Cells["ProductId"].Value);

                // Remove the product from the Cart table in the database
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    string deleteQuery = "DELETE FROM Cart WHERE ProductId = @ProductId";
                    SqlCommand command = new SqlCommand(deleteQuery, connection);
                    command.Parameters.AddWithValue("@ProductId", productId);
                    command.ExecuteNonQuery();
                }

                // Remove the selected row from the DataGridView
                dataGridViewCart.Rows.RemoveAt(selectedRowIndex);

                MessageBox.Show("Product removed from the cart.");
            }
            else
            {
                MessageBox.Show("Please select an item to delete.");
            }
        }
    }



        // Optionally, set up DataGridView columns


    }
    


    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string ImagePath { get; set; }
    }


