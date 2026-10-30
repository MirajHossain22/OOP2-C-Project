using System;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Windows.Forms;
using System.Drawing;

namespace Ecommerce
{
    public partial class EditProductForm : Form
    {
        private int productId;
        private string connectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=""C:\Users\abrar\Documents\E-commerce management system.mdf"";Integrated Security=True;Connect Timeout=30;Encrypt=False";
        private string existingImagePath;

        public EditProductForm(int productId, string productName, decimal price, string categoryName, string imagePath)
        {
            InitializeComponent();
            this.productId = productId;
            existingImagePath = imagePath; // Store existing image path

            // Set initial values
            textBoxProductNameedit.Text = productName;
            textBoxPriceedit.Text = price.ToString();
            


            // Load the existing image
            if (File.Exists(imagePath))
            {
                pictureBoxProductImageedit.Image = Image.FromFile(imagePath);
            }

            // Load categories into the combobox
            LoadCategories(categoryName);
        }

        private void LoadCategories(string selectedCategory)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                string query = "SELECT CategoryId, CategoryName FROM Categories";
                SqlCommand command = new SqlCommand(query, connection);
                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    comboBoxCategoryedit.Items.Add(new
                    {
                        Id = reader["CategoryId"],
                        Name = reader["CategoryName"]
                    });
                }

                comboBoxCategoryedit.DisplayMember = "Name";
                comboBoxCategoryedit.ValueMember = "Id";

                comboBoxCategoryedit.SelectedItem = comboBoxCategoryedit.Items
                    .Cast<dynamic>()
                    .FirstOrDefault(c => c.Name == selectedCategory);
            }
        }

        private void Editbutton_Click(object sender, EventArgs e)
        {
            string productName = textBoxProductNameedit.Text;
            decimal price = Convert.ToDecimal(textBoxPriceedit.Text);
            int categoryId = (int)((dynamic)comboBoxCategoryedit.SelectedItem).Id;
            string imagePath = existingImagePath;

            if (pictureBoxProductImageedit.Image != null)
            {
                
            }

            // Update the product in the database
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                string query = "UPDATE Products SET ProductName = @ProductName, Price = @Price, CategoryId = @CategoryId, ImagePath = @ImagePath WHERE ProductId = @ProductId";
                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@ProductName", productName);
                command.Parameters.AddWithValue("@Price", price);
                command.Parameters.AddWithValue("@CategoryId", categoryId);
                command.Parameters.AddWithValue("@ImagePath", imagePath);
                command.Parameters.AddWithValue("@ProductId", productId);
                command.ExecuteNonQuery();
            }

            this.Close();
        }

       

        private void BrowseButton_Click_1(object sender, EventArgs e)
        {
            OpenFileDialog openFileDialog1 = new OpenFileDialog();
            openFileDialog1.Filter = "Image Files|*.jpg;*.jpeg;*.png;";
            if (openFileDialog1.ShowDialog() == DialogResult.OK)
            {
                string selectedFilePath = openFileDialog1.FileName;
                // Update the image path in the TextBox
                pictureBoxProductImageedit.Image = Image.FromFile(selectedFilePath); // Show the selected image
            }
        }
    }
}
