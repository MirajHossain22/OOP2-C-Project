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
    public partial class UsersEdit : UserControl
    {
        private string connectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=""C:\Users\abrar\Documents\E-commerce management system.mdf"";Integrated Security=True;Connect Timeout=30;Encrypt=False";
        private int userId;
        public UsersEdit()
        {
            InitializeComponent();
        }
        public void LoadUserData(int id)
        {
            userId = id;

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("SELECT Username, Email, Contact,  Password  FROM UsersInfo WHERE UserID = @UserID", conn);
                cmd.Parameters.AddWithValue("@UserID", userId);

                SqlDataReader reader = cmd.ExecuteReader();
                if (reader.Read())
                {
                    textBoxUsername.Text = reader["Username"].ToString();
                    textBoxEmail.Text = reader["Email"].ToString();
                    textBoxContact.Text = reader["Contact"].ToString();
                    //textBoxDateOfBirth.Text = reader["DateofBirth"].ToString();
                    textBoxPassword.Text = reader["Password"].ToString();
                    //textBoxGender.Text = reader["Gender"].ToString();
                }
            }
        }

        private void Savebutton_Click(object sender, EventArgs e)
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("UPDATE UsersInfo SET Username = @Username, Email = @Email, Contact = @Contact,  Password = @Password WHERE UserID = @UserID", conn);
                cmd.Parameters.AddWithValue("@Username", textBoxUsername.Text);
                cmd.Parameters.AddWithValue("@Email", textBoxEmail.Text);
                cmd.Parameters.AddWithValue("@Contact", textBoxContact.Text);
                
                cmd.Parameters.AddWithValue("@Password", textBoxPassword.Text);
                
                cmd.Parameters.AddWithValue("@UserID", userId);

                cmd.ExecuteNonQuery();
            }

            MessageBox.Show("User details updated successfully!");
        }
    }
    }

