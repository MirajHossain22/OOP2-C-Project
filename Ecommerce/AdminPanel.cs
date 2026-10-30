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
    public partial class AdminPanel : Form
    {
        public AdminPanel()
        {
            InitializeComponent();
            this.FormClosing += new FormClosingEventHandler(AdminPanel_FormClosing);
        }

        private void AdminPanel_FormClosing(object sender, FormClosingEventArgs e)
        {
            // Confirm if you want to exit the app
            DialogResult result = MessageBox.Show("Are you sure you want to exit?", "Exit", MessageBoxButtons.YesNo, MessageBoxIcon.Question);

            if (result == DialogResult.Yes)
            {
                // Close the entire application
                Application.Exit();
            }
            else
            {
                // Cancel the form closing if "No" is selected
                e.Cancel = true;
            }
        }

        private void Userinfo_Click(object sender, EventArgs e)
        {
            contentpanel.Controls.Clear();

            // Create a new instance of UserInfoControl
            UserInfo userInfoControl = new UserInfo();

            // Set it to fill the panel
            userInfoControl.Dock = DockStyle.Fill;

            // Add the UserControl to the panel
            contentpanel.Controls.Add(userInfoControl);
        }

        private void ProductControl_Click(object sender, EventArgs e)
        {
            contentpanel.Controls.Clear();

            // Create a new instance of ProductInfoControl
            ProductControl productInfoControl = new ProductControl();

            // Set it to fill the panel
            productInfoControl.Dock = DockStyle.Fill;

            // Add the UserControl to the panel
            contentpanel.Controls.Add(productInfoControl);
        }

        private void button1_Click(object sender, EventArgs e)
        {
            contentpanel.Controls.Clear();

            // Create an instance of BuyerPaymentinfo UserControl
            BuyerPaymentinfo buyerPaymentInfoControl = new BuyerPaymentinfo();

            // Add the UserControl to the contentpanel
            buyerPaymentInfoControl.Dock = DockStyle.Fill;
            contentpanel.Controls.Add(buyerPaymentInfoControl);

            // Assuming you have a method in BuyerPaymentinfo to load the data
            buyerPaymentInfoControl.LoadPaymentData();
        }
    }
}
