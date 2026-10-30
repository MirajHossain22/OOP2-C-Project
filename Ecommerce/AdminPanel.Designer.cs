namespace Ecommerce
{
    partial class AdminPanel
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.contentpanel = new System.Windows.Forms.Panel();
            this.Userinfo = new System.Windows.Forms.Button();
            this.ProductControl = new System.Windows.Forms.Button();
            this.button1 = new System.Windows.Forms.Button();
            this.pictureBox3 = new System.Windows.Forms.PictureBox();
            this.pictureBox2 = new System.Windows.Forms.PictureBox();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox3)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.SuspendLayout();
            // 
            // contentpanel
            // 
            this.contentpanel.Location = new System.Drawing.Point(204, 12);
            this.contentpanel.Name = "contentpanel";
            this.contentpanel.Size = new System.Drawing.Size(762, 720);
            this.contentpanel.TabIndex = 0;
            // 
            // Userinfo
            // 
            this.Userinfo.Location = new System.Drawing.Point(26, 172);
            this.Userinfo.Name = "Userinfo";
            this.Userinfo.Size = new System.Drawing.Size(148, 38);
            this.Userinfo.TabIndex = 1;
            this.Userinfo.Text = "User Details";
            this.Userinfo.UseVisualStyleBackColor = true;
            this.Userinfo.Click += new System.EventHandler(this.Userinfo_Click);
            // 
            // ProductControl
            // 
            this.ProductControl.Location = new System.Drawing.Point(26, 369);
            this.ProductControl.Name = "ProductControl";
            this.ProductControl.Size = new System.Drawing.Size(148, 38);
            this.ProductControl.TabIndex = 2;
            this.ProductControl.Text = "Product Details";
            this.ProductControl.UseVisualStyleBackColor = true;
            this.ProductControl.Click += new System.EventHandler(this.ProductControl_Click);
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(26, 578);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(132, 53);
            this.button1.TabIndex = 5;
            this.button1.Text = "Selling History";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // pictureBox3
            // 
            this.pictureBox3.Image = global::Ecommerce.Properties.Resources.items_sold;
            this.pictureBox3.Location = new System.Drawing.Point(26, 443);
            this.pictureBox3.Name = "pictureBox3";
            this.pictureBox3.Size = new System.Drawing.Size(148, 115);
            this.pictureBox3.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox3.TabIndex = 6;
            this.pictureBox3.TabStop = false;
            // 
            // pictureBox2
            // 
            this.pictureBox2.Image = global::Ecommerce.Properties.Resources.Product_Details;
            this.pictureBox2.Location = new System.Drawing.Point(23, 263);
            this.pictureBox2.Name = "pictureBox2";
            this.pictureBox2.Size = new System.Drawing.Size(151, 100);
            this.pictureBox2.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox2.TabIndex = 4;
            this.pictureBox2.TabStop = false;
            // 
            // pictureBox1
            // 
            this.pictureBox1.Image = global::Ecommerce.Properties.Resources.User_Details;
            this.pictureBox1.Location = new System.Drawing.Point(23, 54);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(151, 112);
            this.pictureBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox1.TabIndex = 3;
            this.pictureBox1.TabStop = false;
            // 
            // AdminPanel
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.CornflowerBlue;
            this.ClientSize = new System.Drawing.Size(978, 744);
            this.Controls.Add(this.pictureBox3);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.pictureBox2);
            this.Controls.Add(this.pictureBox1);
            this.Controls.Add(this.ProductControl);
            this.Controls.Add(this.Userinfo);
            this.Controls.Add(this.contentpanel);
            this.Name = "AdminPanel";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "AdminPanel";
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox3)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Panel contentpanel;
        private System.Windows.Forms.Button Userinfo;
        private System.Windows.Forms.Button ProductControl;
        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.PictureBox pictureBox2;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.PictureBox pictureBox3;
    }
}