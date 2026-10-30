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
    public partial class UserLogin : Form
    {
        string connectionString = "Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=\"C:\\Users\\abrar\\Documents\\E-commerce management system.mdf\";Integrated Security=True;Connect Timeout=30;Encrypt=False";
        public UserLogin()
        {
            InitializeComponent();
        }

        

        private void BackButton_Click(object sender, EventArgs e)
        {
            this.Hide();
            Form1 form1 = new Form1();
            form1.Show();
        }

        private void signuplink_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            this.Hide();
            Register register = new Register();
            register.Show();
        }

        private void UserLogin_FormClosed(object sender, FormClosedEventArgs e)
        {
            
                // Close the entire application when this form is closed
                Application.Exit();
            }

        private void login_Click(object sender, EventArgs e)
        {
            string username = textBoxUsername.Text;
            string password = textBoxPassword.Text;

            if (ValidateUser(username, password))
            {
                // Navigate to UserPanel
                UserPanel userPanel = new UserPanel();
                this.Hide(); // Hide the login form
                userPanel.Show(); // Show the UserPanel
            }
            else
            {
                MessageBox.Show("Invalid username or password.");
            }
        }
        private bool ValidateUser(string username, string password)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                string query = "SELECT COUNT(1) FROM UsersInfo WHERE Username = @Username AND Password = @Password"; // Ensure to hash passwords in production
                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@Username", username);
                command.Parameters.AddWithValue("@Password", password);
                int count = Convert.ToInt32(command.ExecuteScalar());
                return count > 0;
            }
        }
    }

}
