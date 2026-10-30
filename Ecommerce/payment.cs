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
    public partial class payment : Form
    {
        private string connectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=""C:\Users\abrar\Documents\E-commerce management system.mdf"";Integrated Security=True;Connect Timeout=30;Encrypt=False";
        public payment()
        {
            InitializeComponent();

            comboBoxCardType.Items.Add("Visa");
            comboBoxCardType.Items.Add("Mastercard");
            comboBoxCardType.Items.Add("Credit");
            comboBoxCardType.SelectedIndex = 0;
        }
        private bool ValidatePaymentDetails()
        {
            // Validate card number (should be 16 digits)
            if (textBoxCardNumber.Text.Length != 16 || !long.TryParse(textBoxCardNumber.Text, out _))
            {
                MessageBox.Show("Invalid card number. It must be 16 digits.");
                return false;
            }

            // Validate CVV (should be 3 digits)
            if (textBoxCVV.Text.Length != 3 || !int.TryParse(textBoxCVV.Text, out _))
            {
                MessageBox.Show("Invalid CVV. It must be 3 digits.");
                return false;
            }

            // Ensure a card type is selected
            if (comboBoxCardType.SelectedItem == null)
            {
                MessageBox.Show("Please select a card type.");
                return false;
            }

            return true;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (ValidatePaymentDetails())
            {
                SavePaymentDetails();
                MessageBox.Show("Payment processed successfully!");
                this.DialogResult = DialogResult.OK;
                this.Close();
                UserPanel userPanel = new UserPanel();
                userPanel.Show();
                
            }
        }
        private void SavePaymentDetails()
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                string query = "INSERT INTO Payments (FirstName, LastName, CardNumber, ExpiryDate, CVV, CardType) " +
                               "VALUES (@FirstName, @LastName, @CardNumber, @ExpiryDate, @CVV, @CardType)";

                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@FirstName", fst.Text);
                command.Parameters.AddWithValue("@LastName", lastnam.Text);
                command.Parameters.AddWithValue("@CardNumber", textBoxCardNumber.Text);
                command.Parameters.AddWithValue("@ExpiryDate", ExpireDAte.Value.Date);
                command.Parameters.AddWithValue("@CVV", textBoxCVV.Text);
                command.Parameters.AddWithValue("@CardType", comboBoxCardType.SelectedItem.ToString());

                command.ExecuteNonQuery();
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Hide();
            UserPanel userPanel=new UserPanel();
            userPanel.Show();
        }
    }
}
