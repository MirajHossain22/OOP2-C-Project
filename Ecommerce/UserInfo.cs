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
    public partial class UserInfo : UserControl
    {
        private string connectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=""C:\Users\abrar\Documents\E-commerce management system.mdf"";Integrated Security=True;Connect Timeout=30;Encrypt=False";

        public UserInfo()
        {
            InitializeComponent();
            LoadUserInfo();

        }
        private void LoadUserInfo()
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM UsersInfo", conn);
                DataSet ds = new DataSet();
                da.Fill(ds, "UsersInfo");

                dataGridViewUsers.DataSource = ds.Tables["UsersInfo"];
                dataGridViewUsers.AllowUserToAddRows = false;
            }
        }

        private void editusers_Click(object sender, EventArgs e)
        {
            if (dataGridViewUsers.SelectedRows.Count > 0)
            {
               int selectedUserId = Convert.ToInt32(dataGridViewUsers.SelectedRows[0].Cells["UserId"].Value);

             //Create an instance of UsersEdit user control
                UsersEdit usersEdit = new UsersEdit();

              // Load the selected user data into UsersEdit user control
               usersEdit.LoadUserData(selectedUserId);

                // Show the UsersEdit user control on the right panel (or a specific panel)
                UsersEdit.Controls.Clear(); // Clear previous controls if needed
                UsersEdit.Controls.Add(usersEdit);
                usersEdit.Dock = DockStyle.Fill; // Adjust the layout as necessary
            }
            else
            {
                MessageBox.Show("Please select a user to edit.");
            }
        }

        private void deletebutton_Click(object sender, EventArgs e)
        {
            if (dataGridViewUsers.SelectedRows.Count > 0)
            {
                int selectedUserId = Convert.ToInt32(dataGridViewUsers.SelectedRows[0].Cells["UserID"].Value);

                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();
                    SqlCommand cmd = new SqlCommand("DELETE FROM UsersInfo WHERE UserID = @UserID", conn);
                    cmd.Parameters.AddWithValue("@UserID", selectedUserId);
                    cmd.ExecuteNonQuery();
                }

                // Refresh the DataGridView after deletion
                LoadUserInfo();
                MessageBox.Show("User deleted successfully.");
            }
            else
            {
                MessageBox.Show("Please select a user to delete.");
            }
        }

        private void textBoxSearchEmail_TextChanged(object sender, EventArgs e)
        {
            //string searchEmail = textBoxSearchEmail.Text.Trim().ToLower();

            //// Loop through each row in the DataGridView
            //for (int i = 0; i < dataGridViewUsers.Rows.Count; i++)
            //{
            //    DataGridViewRow row = dataGridViewUsers.Rows[i];

            //    // Check if the email column contains the search text
            //    if (row.Cells["Email"].Value != null &&
            //        row.Cells["Email"].Value.ToString().ToLower().Contains(searchEmail))
            //    {
            //        row.Visible = true;  // Show row if it matches
            //    }
            //    else
            //    {
            //        row.Visible = false; // Hide row if it doesn't match
            //    }
            //}
        }
    }
}
