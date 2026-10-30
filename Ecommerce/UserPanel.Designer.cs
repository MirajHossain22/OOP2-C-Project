namespace Ecommerce
{
    partial class UserPanel
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
            this.tabControlUserPanel = new System.Windows.Forms.TabControl();
            this.tabPage1 = new System.Windows.Forms.TabPage();
            this.flowLayoutPanelShop = new System.Windows.Forms.FlowLayoutPanel();
            this.productPanel = new System.Windows.Forms.Panel();
            this.ProductName = new System.Windows.Forms.Label();
            this.buttonAddToCart = new System.Windows.Forms.Button();
            this.ProductPrice = new System.Windows.Forms.Label();
            this.labelName = new System.Windows.Forms.Label();
            this.productImage = new System.Windows.Forms.PictureBox();
            this.tabPageCart = new System.Windows.Forms.TabPage();
            this.buttonDeleteFromCart = new System.Windows.Forms.Button();
            this.Payment = new System.Windows.Forms.Button();
            this.ShowCart = new System.Windows.Forms.Button();
            this.dataGridViewCart = new System.Windows.Forms.DataGridView();
            this.tabControlUserPanel.SuspendLayout();
            this.tabPage1.SuspendLayout();
            this.flowLayoutPanelShop.SuspendLayout();
            this.productPanel.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.productImage)).BeginInit();
            this.tabPageCart.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridViewCart)).BeginInit();
            this.SuspendLayout();
            // 
            // tabControlUserPanel
            // 
            this.tabControlUserPanel.Controls.Add(this.tabPage1);
            this.tabControlUserPanel.Controls.Add(this.tabPageCart);
            this.tabControlUserPanel.Location = new System.Drawing.Point(2, 12);
            this.tabControlUserPanel.Name = "tabControlUserPanel";
            this.tabControlUserPanel.SelectedIndex = 0;
            this.tabControlUserPanel.Size = new System.Drawing.Size(977, 720);
            this.tabControlUserPanel.TabIndex = 0;
            // 
            // tabPage1
            // 
            this.tabPage1.Controls.Add(this.flowLayoutPanelShop);
            this.tabPage1.Location = new System.Drawing.Point(4, 29);
            this.tabPage1.Name = "tabPage1";
            this.tabPage1.Padding = new System.Windows.Forms.Padding(3);
            this.tabPage1.Size = new System.Drawing.Size(969, 687);
            this.tabPage1.TabIndex = 0;
            this.tabPage1.Text = "Shop";
            this.tabPage1.UseVisualStyleBackColor = true;
            // 
            // flowLayoutPanelShop
            // 
            this.flowLayoutPanelShop.AutoScroll = true;
            this.flowLayoutPanelShop.BackColor = System.Drawing.Color.MistyRose;
            this.flowLayoutPanelShop.Controls.Add(this.productPanel);
            this.flowLayoutPanelShop.Location = new System.Drawing.Point(6, 6);
            this.flowLayoutPanelShop.Name = "flowLayoutPanelShop";
            this.flowLayoutPanelShop.Size = new System.Drawing.Size(960, 681);
            this.flowLayoutPanelShop.TabIndex = 0;
            // 
            // productPanel
            // 
            this.productPanel.AutoScroll = true;
            this.productPanel.AutoSize = true;
            this.productPanel.BackColor = System.Drawing.Color.DarkSalmon;
            this.productPanel.Controls.Add(this.ProductName);
            this.productPanel.Controls.Add(this.buttonAddToCart);
            this.productPanel.Controls.Add(this.ProductPrice);
            this.productPanel.Controls.Add(this.labelName);
            this.productPanel.Controls.Add(this.productImage);
            this.productPanel.Location = new System.Drawing.Point(3, 3);
            this.productPanel.Name = "productPanel";
            this.productPanel.Size = new System.Drawing.Size(310, 251);
            this.productPanel.TabIndex = 0;
            // 
            // ProductName
            // 
            this.ProductName.AutoSize = true;
            this.ProductName.Location = new System.Drawing.Point(146, 122);
            this.ProductName.Name = "ProductName";
            this.ProductName.Size = new System.Drawing.Size(51, 20);
            this.ProductName.TabIndex = 4;
            this.ProductName.Text = "label1";
            // 
            // buttonAddToCart
            // 
            this.buttonAddToCart.Location = new System.Drawing.Point(129, 209);
            this.buttonAddToCart.Name = "buttonAddToCart";
            this.buttonAddToCart.Size = new System.Drawing.Size(135, 39);
            this.buttonAddToCart.TabIndex = 3;
            this.buttonAddToCart.Text = "Add To Cart";
            this.buttonAddToCart.UseVisualStyleBackColor = true;
            this.buttonAddToCart.Click += new System.EventHandler(this.AddToCart_Click);
            // 
            // ProductPrice
            // 
            this.ProductPrice.AutoSize = true;
            this.ProductPrice.Location = new System.Drawing.Point(146, 157);
            this.ProductPrice.Name = "ProductPrice";
            this.ProductPrice.Size = new System.Drawing.Size(51, 20);
            this.ProductPrice.TabIndex = 2;
            this.ProductPrice.Text = "label2";
            // 
            // labelName
            // 
            this.labelName.AutoSize = true;
            this.labelName.Location = new System.Drawing.Point(146, 112);
            this.labelName.Name = "labelName";
            this.labelName.Size = new System.Drawing.Size(0, 20);
            this.labelName.TabIndex = 1;
            // 
            // productImage
            // 
            this.productImage.Location = new System.Drawing.Point(57, 12);
            this.productImage.Name = "productImage";
            this.productImage.Size = new System.Drawing.Size(250, 87);
            this.productImage.TabIndex = 0;
            this.productImage.TabStop = false;
            // 
            // tabPageCart
            // 
            this.tabPageCart.BackColor = System.Drawing.Color.MistyRose;
            this.tabPageCart.Controls.Add(this.buttonDeleteFromCart);
            this.tabPageCart.Controls.Add(this.Payment);
            this.tabPageCart.Controls.Add(this.ShowCart);
            this.tabPageCart.Controls.Add(this.dataGridViewCart);
            this.tabPageCart.Location = new System.Drawing.Point(4, 29);
            this.tabPageCart.Name = "tabPageCart";
            this.tabPageCart.Padding = new System.Windows.Forms.Padding(3);
            this.tabPageCart.Size = new System.Drawing.Size(969, 687);
            this.tabPageCart.TabIndex = 1;
            this.tabPageCart.Text = "Cart";
            // 
            // buttonDeleteFromCart
            // 
            this.buttonDeleteFromCart.Location = new System.Drawing.Point(566, 370);
            this.buttonDeleteFromCart.Name = "buttonDeleteFromCart";
            this.buttonDeleteFromCart.Size = new System.Drawing.Size(170, 73);
            this.buttonDeleteFromCart.TabIndex = 3;
            this.buttonDeleteFromCart.Text = "Delete Item";
            this.buttonDeleteFromCart.UseVisualStyleBackColor = true;
            this.buttonDeleteFromCart.Click += new System.EventHandler(this.buttonDeleteFromCart_Click);
            // 
            // Payment
            // 
            this.Payment.Location = new System.Drawing.Point(336, 370);
            this.Payment.Name = "Payment";
            this.Payment.Size = new System.Drawing.Size(170, 73);
            this.Payment.TabIndex = 2;
            this.Payment.Text = "Payment";
            this.Payment.UseVisualStyleBackColor = true;
            this.Payment.Click += new System.EventHandler(this.Payment_Click);
            // 
            // ShowCart
            // 
            this.ShowCart.Location = new System.Drawing.Point(124, 371);
            this.ShowCart.Name = "ShowCart";
            this.ShowCart.Size = new System.Drawing.Size(151, 72);
            this.ShowCart.TabIndex = 1;
            this.ShowCart.Text = "Show";
            this.ShowCart.UseVisualStyleBackColor = true;
            this.ShowCart.Click += new System.EventHandler(this.ShowCart_Click);
            // 
            // dataGridViewCart
            // 
            this.dataGridViewCart.AllowUserToAddRows = false;
            this.dataGridViewCart.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridViewCart.Dock = System.Windows.Forms.DockStyle.Top;
            this.dataGridViewCart.Location = new System.Drawing.Point(3, 3);
            this.dataGridViewCart.Name = "dataGridViewCart";
            this.dataGridViewCart.RowHeadersWidth = 62;
            this.dataGridViewCart.RowTemplate.Height = 28;
            this.dataGridViewCart.Size = new System.Drawing.Size(963, 318);
            this.dataGridViewCart.TabIndex = 0;
            // 
            // UserPanel
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(978, 744);
            this.Controls.Add(this.tabControlUserPanel);
            this.Name = "UserPanel";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "UserPanel";
            this.tabControlUserPanel.ResumeLayout(false);
            this.tabPage1.ResumeLayout(false);
            this.flowLayoutPanelShop.ResumeLayout(false);
            this.flowLayoutPanelShop.PerformLayout();
            this.productPanel.ResumeLayout(false);
            this.productPanel.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.productImage)).EndInit();
            this.tabPageCart.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridViewCart)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.TabControl tabControlUserPanel;
        private System.Windows.Forms.TabPage tabPage1;
        private System.Windows.Forms.FlowLayoutPanel flowLayoutPanelShop;
        private System.Windows.Forms.Panel productPanel;
        private System.Windows.Forms.PictureBox productImage;
        private System.Windows.Forms.TabPage tabPageCart;
        private System.Windows.Forms.Button buttonAddToCart;
        private System.Windows.Forms.Label ProductPrice;
        private System.Windows.Forms.Label labelName;
        private System.Windows.Forms.Label ProductName;
        private System.Windows.Forms.DataGridView dataGridViewCart;
        private System.Windows.Forms.Button ShowCart;
        private System.Windows.Forms.Button Payment;
        private System.Windows.Forms.Button buttonDeleteFromCart;
    }
}