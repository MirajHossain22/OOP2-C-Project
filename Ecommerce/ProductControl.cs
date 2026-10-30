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

namespace Ecommerce
{
    public partial class ProductControl : UserControl
    {
        private string connectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=""C:\Users\abrar\Documents\E-commerce management system.mdf"";Integrated Security=True;Connect Timeout=30;Encrypt=False";
        public ProductControl()
        {
            InitializeComponent();
            LoadProducts();
        }

        private void InitializeDataGridView()
        {
            dataGridViewProducts.Columns.Clear(); // Clear any existing columns

            dataGridViewProducts.Columns.Add("ProductId", "Product ID");
            dataGridViewProducts.Columns.Add("ProductName", "Product Name");
            dataGridViewProducts.Columns.Add("Price", "Price");
            dataGridViewProducts.Columns.Add("CategoryName", "Category");
        }
        private void LoadProducts()
        {
            InitializeDataGridView();
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();

                // Create a command to get product details along with category names
                string query = @"
            SELECT p.ProductId, p.ProductName, p.Price, c.CategoryName 
            FROM Products p 
            JOIN Categories c ON p.CategoryId = c.CategoryId";

                SqlCommand command = new SqlCommand(query, connection);
                SqlDataReader reader = command.ExecuteReader();

                // Clear existing rows
                dataGridViewProducts.Rows.Clear();

                while (reader.Read())
                {
                    // Assuming the column names as per the database
                    dataGridViewProducts.Rows.Add(
                        reader["ProductId"],
                        reader["ProductName"],
                        reader["Price"],
                        reader["CategoryName"]
                    );
                }
            }
        }

        private void AddProductbutton_Click(object sender, EventArgs e)
        {
            using (AddProductForm addProductForm = new AddProductForm())
            {
                if (addProductForm.ShowDialog() == DialogResult.OK)
                {
                    LoadProducts(); // Reload products after adding
                }
            }



        }

        private void EditProductbutton_Click(object sender, EventArgs e)
        {
            if (dataGridViewProducts.SelectedRows.Count > 0)
            {
                // Get the selected row
                var selectedRow = dataGridViewProducts.SelectedRows[0];

                // Retrieve the product details
                int productId = (int)selectedRow.Cells["ProductId"].Value;
                string productName = selectedRow.Cells["ProductName"].Value.ToString();
                decimal price = Convert.ToDecimal(selectedRow.Cells["Price"].Value);
                string categoryName = selectedRow.Cells["CategoryName"].Value.ToString();

                string imagePath = null; // Declare the variable to hold the image path

                // Retrieve the image path from the database
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    string query = "SELECT ImagePath FROM Products WHERE ProductId = @ProductId";
                    SqlCommand command = new SqlCommand(query, connection);
                    command.Parameters.AddWithValue("@ProductId", productId);
                    imagePath = command.ExecuteScalar() as string; // Get the image path
                }

                // Create an instance of the EditProductForm
                EditProductForm editProductForm = new EditProductForm(productId, productName, price, categoryName, imagePath);

                // Show the EditProductForm
                editProductForm.ShowDialog();

                // Reload the products after editing
                LoadProducts();
            }
            else
            {
                MessageBox.Show("Please select a product to edit.");
            }
        }

        private void DeleteProductbutton_Click(object sender, EventArgs e)
        {
            if (dataGridViewProducts.SelectedRows.Count > 0)
            {
                DataGridViewRow selectedRow = dataGridViewProducts.SelectedRows[0];
                int productId = Convert.ToInt32(selectedRow.Cells["ProductId"].Value);

                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    string query = "DELETE FROM Products WHERE ProductId = @ProductId";
                    SqlCommand command = new SqlCommand(query, connection);
                    command.Parameters.AddWithValue("@ProductId", productId);

                    connection.Open();
                    command.ExecuteNonQuery();
                    LoadProducts(); // Reload products after deletion
                }
            }
            else
            {
                MessageBox.Show("Please select a product to delete.");
            }
        }

        private void SearchProductButton_Click(object sender, EventArgs e)
        {
            string searchTerm = textBoxSearchProducts.Text.Trim();
            SearchProduct(searchTerm);

        }
        private void SearchProduct(string searchTerm)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();

                string query = @"
            SELECT p.ProductId, p.ProductName, p.Price, c.CategoryName 
            FROM Products p 
            JOIN Categories c ON p.CategoryId = c.CategoryId 
            WHERE p.ProductName LIKE @SearchTerm";

                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@SearchTerm", "%" + searchTerm + "%");

                SqlDataReader reader = command.ExecuteReader();

                // Clear existing rows
                dataGridViewProducts.Rows.Clear();

                while (reader.Read())
                {
                    // Assuming the column names as per the database
                    dataGridViewProducts.Rows.Add(
                        reader["ProductId"],
                        reader["ProductName"],
                        reader["Price"],
                        reader["CategoryName"]
                    );
                }
            }
        }

    }
}
