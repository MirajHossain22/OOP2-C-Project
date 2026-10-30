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
    public partial class AddProductForm : Form
    {
        private string imagePath;
        private string connectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=""C:\Users\abrar\Documents\E-commerce management system.mdf"";Integrated Security=True;Connect Timeout=30;Encrypt=False";
        public AddProductForm()
        {
            InitializeComponent();
            LoadCategories();
        }
        private void LoadCategories()
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                string query = "SELECT CategoryId, CategoryName FROM Categories"; // Your table is 'Categories'
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        DataTable categories = new DataTable();
                        categories.Load(reader);

                        comboBoxCategory.DisplayMember = "CategoryName"; // What is shown to the user
                        comboBoxCategory.ValueMember = "CategoryId";     // What is used as the value
                        comboBoxCategory.DataSource = categories;        // Binding data source
                    }
                }





                
            }
        }

        private void Addbutton_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(textBoxProductName.Text) ||
                string.IsNullOrEmpty(textBoxPrice.Text) ||
                comboBoxCategory.SelectedItem == null ||
                string.IsNullOrEmpty(imagePath))
            {
                MessageBox.Show("Please fill in all fields and select an image.", "Input Error", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                try
                {
                    connection.Open();
                    // Define the query to insert a new product
                    string query = "INSERT INTO Products (ProductName, Price, CategoryId, ImagePath) VALUES (@ProductName, @Price, @CategoryId, @ImagePath)";

                    using (SqlCommand command = new SqlCommand(query, connection))
                    {
                        // Add parameters to the command
                        command.Parameters.AddWithValue("@ProductName", textBoxProductName.Text);
                        command.Parameters.AddWithValue("@Price", Convert.ToDecimal(textBoxPrice.Text));
                        command.Parameters.AddWithValue("@CategoryId", comboBoxCategory.SelectedValue); // Assuming you have set the ValueMember for the ComboBox
                        command.Parameters.AddWithValue("@ImagePath", imagePath); // Use the image path stored from OpenFileDialog

                        // Execute the command
                        int rowsAffected = command.ExecuteNonQuery();

                        if (rowsAffected > 0)
                        {
                            MessageBox.Show("Product added successfully!", "Success", MessageBoxButtons.OK, MessageBoxIcon.Information);
                            // Optionally, clear the form fields after adding
                            ClearFormFields();
                        }
                        else
                        {
                            MessageBox.Show("Failed to add product. Please try again.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                        }
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show($"An error occurred: {ex.Message}", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
            }



            string productName = textBoxProductName.Text;
            decimal price = decimal.Parse(textBoxPrice.Text);
            int categoryId = (int)((dynamic)comboBoxCategory.SelectedItem).Value;// Make sure you have bound the category properly

            // Use OpenFileDialog to select the image
           
        }

        private void button1_Click(object sender, EventArgs e)
        {
            using (OpenFileDialog openFileDialog = new OpenFileDialog())
            {
                openFileDialog.Filter = "Image Files|*.jpg;*.jpeg;*.png;*.bmp;*.gif";
                openFileDialog.Title = "Select a Product Image";

                if (openFileDialog.ShowDialog() == DialogResult.OK)
                {
                    imagePath = openFileDialog.FileName; // Store the image path
                    pictureBoxProductImage.ImageLocation = imagePath; // Display the selected image
                }
            }
        }
        private void ClearFormFields()
        {
            textBoxProductName.Clear();
            textBoxPrice.Clear();
            comboBoxCategory.SelectedIndex = -1; // Clear the ComboBox selection
            pictureBoxProductImage.Image = null; // Clear the displayed image
            imagePath = null; // Reset the imagePath variable
        }
    }
}
