using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Ecommerce
{
    public partial class AdminLogin : Form
    {
        public AdminLogin()
        {
            InitializeComponent();
            this.FormClosed += new FormClosedEventHandler(AdminLogin_FormClosed);
        }

        

        private void button1_Click(object sender, EventArgs e)
        {
            string adminUsername = "admin";
            string adminPassword = "1234";

            // Get the input from textboxes
            string inputUsername = AdminUserName.Text;
            string inputPassword = AdminPassword.Text;

            // Check if the entered username and password match the admin credentials
            if (inputUsername == adminUsername && inputPassword == adminPassword)
            {
                // Login successful
                MessageBox.Show("Admin login successful!", "Success", MessageBoxButtons.OK, MessageBoxIcon.Information);

                // Proceed to the admin panel or next form
                AdminPanel adminPanel = new AdminPanel();
                adminPanel.Show();
                this.Hide(); // Close the login form
            }
            else
            {
                // Login failed
                MessageBox.Show("Invalid username or password. Please try again.", "Login Failed", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void AdminLogin_FormClosed(object sender, FormClosedEventArgs e)
        {
            Form1 mainForm = Application.OpenForms["Form1"] as Form1;
            if (mainForm != null)
            {
                mainForm.Close(); // Closes Form1 when AdminLogin is closed
            }
        }

        private void AdminLogin_Load(object sender, EventArgs e)
        {

        }
    }

}

