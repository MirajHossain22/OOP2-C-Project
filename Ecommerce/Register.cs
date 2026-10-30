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
    public partial class Register : Form
    {
        public Register()
        {
            InitializeComponent();
            Passwordtextboxnew.TextChanged += Passwordtextboxnew_TextChanged;
            ConfirmPasswordnew.TextChanged += ConfirmPasswordnew_TextChanged;
            this.FormClosed += new FormClosedEventHandler(Register_FormClosed);

            // Initially, the Create Account button is disabled until the checkbox is checked
            CreateAccountbutton.Enabled = false;
            
        }

        

        private void Passwordtextboxnew_TextChanged(object sender, EventArgs e)
        {
            string password = Passwordtextboxnew.Text;

            // Check if the password length is less than 8 characters
            if (password.Length < 3)
            {
                labelPasswordStatus.Text = "Password must be at least 8 characters.";
                labelPasswordStatus.ForeColor = Color.Red;
            }
            else
            {
                labelPasswordStatus.Text = "Password is valid.";
                labelPasswordStatus.ForeColor = Color.Green;
            }
        }

        private void ConfirmPasswordnew_TextChanged(object sender, EventArgs e)
        {
            string password = Passwordtextboxnew.Text;
            string confirmPassword = ConfirmPasswordnew.Text;

            // Check if the passwords match
            if (password != confirmPassword)
            {
                labelConfirmPasswordStatus.Text = "Passwords do not match!";
                labelConfirmPasswordStatus.ForeColor = Color.Red;
            }
            else
            {
                labelConfirmPasswordStatus.Text = "Passwords match.";
                labelConfirmPasswordStatus.ForeColor = Color.Green;
            }
        }

        private void linkLabel1_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            string terms = "Terms and Conditions:\n\n" +
                   "1. By registering, you agree to our terms and conditions.\n" +
                   "2. Your personal data will be protected and not shared with third parties.\n" +
                   "3. Password must be kept confidential at all times.\n" +
                   "4. Users must comply with the usage rules of the application.\n" +
                   "5. Any violations may result in account suspension or termination.\n\n" 
                   ;

            MessageBox.Show(terms, "Terms and Conditions", MessageBoxButtons.OK, MessageBoxIcon.Information);
        }

        

        private void checkBox2_CheckedChanged(object sender, EventArgs e)
        {
            CreateAccountbutton.Enabled = AgreeCheckbox.Checked;
        }

        private void CreateAccountbutton_Click(object sender, EventArgs e)
        {
            
            if (string.IsNullOrWhiteSpace(Usernametextbox.Text) ||
        string.IsNullOrWhiteSpace(Emailtextbox.Text) ||
        string.IsNullOrWhiteSpace(Contacttextbox.Text) ||
        string.IsNullOrWhiteSpace(GenderCombo.Text) ||  // Assuming a ComboBox for gender
        UserDateofBirth.Value == null ||  // Assuming a DateTimePicker for Date of Birth
        string.IsNullOrWhiteSpace(Passwordtextboxnew.Text))
            {
                MessageBox.Show("Please fill in all fields.", "Missing Information", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }

            // Step 2: Check for unique Email and Contact number
            string connectionString = "Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=\"C:\\Users\\abrar\\Documents\\E-commerce management system.mdf\";Integrated Security=True;Connect Timeout=30;Encrypt=False";
            string email = Emailtextbox.Text;
            string contact = Contacttextbox.Text;

            // SQL query to check if email or contact already exists
            string checkQuery = "SELECT COUNT(*) FROM UsersInfo WHERE Email = @Email OR Contact = @Contact";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                try
                {
                    connection.Open();

                    using (SqlCommand checkCommand = new SqlCommand(checkQuery, connection))
                    {
                        checkCommand.Parameters.AddWithValue("@Email", email);
                        checkCommand.Parameters.AddWithValue("@Contact", contact);

                        int count = (int)checkCommand.ExecuteScalar();
                        if (count > 0)
                        {
                            MessageBox.Show("Email or Contact number already exists. Please use different ones.", "Duplicate Entry", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                            return;
                        }
                    }

                    // Step 3: Insert the new user into the Users table
                    string insertQuery = "INSERT INTO UsersInfo (Username, Email, Contact, Gender, DateOfBirth, Password) " +
                                         "VALUES (@Username, @Email, @Contact, @Gender, @DateOfBirth, @Password)";

                    using (SqlCommand insertCommand = new SqlCommand(insertQuery, connection))
                    {
                        insertCommand.Parameters.AddWithValue("@Username", Usernametextbox.Text);
                        insertCommand.Parameters.AddWithValue("@Email", email);
                        insertCommand.Parameters.AddWithValue("@Contact", contact);
                        insertCommand.Parameters.AddWithValue("@Gender", GenderCombo.SelectedItem.ToString());  // Assuming ComboBox for Gender
                        insertCommand.Parameters.AddWithValue("@DateOfBirth", UserDateofBirth.Value);
                        insertCommand.Parameters.AddWithValue("@Password", Passwordtextboxnew.Text);  // Remember to hash passwords in real apps!

                        int rowsAffected = insertCommand.ExecuteNonQuery();
                        if (rowsAffected > 0)
                        {
                            MessageBox.Show("Account created successfully!", "Success", MessageBoxButtons.OK, MessageBoxIcon.Information);
                            this.Hide();
                            UserLogin userLogin = new UserLogin();
                            userLogin.Show();
                        }
                        else
                        {
                            MessageBox.Show("Failed to create the account. Please try again.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                        }
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Error: " + ex.Message, "Database Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }


            }

        }
        private void Register_FormClosed(object sender, FormClosedEventArgs e)
        {
            Form1 mainForm = Application.OpenForms["Form1"] as Form1;
            if (mainForm != null)
            {
                mainForm.Close(); // Closes Form1 when Register is closed
            }
        }

        private void BackButton_Click(object sender, EventArgs e)
        {
            this.Hide();
            UserLogin userLogin=new UserLogin();
            userLogin.Show();
        }
    }
    }

