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
    public partial class BuyerPaymentinfo : UserControl
    {
        public string connectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=""C:\Users\abrar\Documents\E-commerce management system.mdf"";Integrated Security=True;Connect Timeout=30;Encrypt=False";
        public BuyerPaymentinfo()
        {
            InitializeComponent();
            LoadPaymentData();
        }
        public void LoadPaymentData()
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                string query = "SELECT FirstName, LastName, CardType, CardNumber, ExpiryDate, CVV FROM Payments";
                SqlDataAdapter adapter = new SqlDataAdapter(query, connection);
                DataTable paymentTable = new DataTable();
                adapter.Fill(paymentTable);

                dataGridViewPayment.DataSource = paymentTable;

                // Hide Payment ID column if it's ever in the query.
                if (dataGridViewPayment.Columns["PaymentId"] != null)
                {
                    dataGridViewPayment.Columns["PaymentId"].Visible = false;
                }
            }
        }
    }
}
