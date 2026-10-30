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
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void UserChoose_Click(object sender, EventArgs e)
        {
            this.Hide();
            UserLogin userLogin = new UserLogin();
            userLogin.Show();
            
        }

        private void AdminChoose_Click(object sender, EventArgs e)
        {
            this.Hide();
            AdminLogin userLogin = new AdminLogin();
            userLogin.Show();
        }
    }
}
