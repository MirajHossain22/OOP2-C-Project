namespace Ecommerce
{
    partial class ProductControl
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

        #region Component Designer generated code

        /// <summary> 
        /// Required method for Designer support - do not modify 
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.AddProductbutton = new System.Windows.Forms.Button();
            this.EditProductbutton = new System.Windows.Forms.Button();
            this.DeleteProductbutton = new System.Windows.Forms.Button();
            this.panel1 = new System.Windows.Forms.Panel();
            this.dataGridViewProducts = new System.Windows.Forms.DataGridView();
            this.textBoxSearchProducts = new System.Windows.Forms.TextBox();
            this.SearchProductButton = new System.Windows.Forms.Button();
            this.panel1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridViewProducts)).BeginInit();
            this.SuspendLayout();
            // 
            // AddProductbutton
            // 
            this.AddProductbutton.Location = new System.Drawing.Point(84, 46);
            this.AddProductbutton.Name = "AddProductbutton";
            this.AddProductbutton.Size = new System.Drawing.Size(127, 40);
            this.AddProductbutton.TabIndex = 0;
            this.AddProductbutton.Text = "Add Product";
            this.AddProductbutton.UseVisualStyleBackColor = true;
            this.AddProductbutton.Click += new System.EventHandler(this.AddProductbutton_Click);
            // 
            // EditProductbutton
            // 
            this.EditProductbutton.Location = new System.Drawing.Point(324, 46);
            this.EditProductbutton.Name = "EditProductbutton";
            this.EditProductbutton.Size = new System.Drawing.Size(114, 41);
            this.EditProductbutton.TabIndex = 1;
            this.EditProductbutton.Text = "Edit Product";
            this.EditProductbutton.UseVisualStyleBackColor = true;
            this.EditProductbutton.Click += new System.EventHandler(this.EditProductbutton_Click);
            // 
            // DeleteProductbutton
            // 
            this.DeleteProductbutton.Location = new System.Drawing.Point(536, 46);
            this.DeleteProductbutton.Name = "DeleteProductbutton";
            this.DeleteProductbutton.Size = new System.Drawing.Size(143, 41);
            this.DeleteProductbutton.TabIndex = 2;
            this.DeleteProductbutton.Text = "Delete Product";
            this.DeleteProductbutton.UseVisualStyleBackColor = true;
            this.DeleteProductbutton.Click += new System.EventHandler(this.DeleteProductbutton_Click);
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.dataGridViewProducts);
            this.panel1.Location = new System.Drawing.Point(13, 275);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(746, 373);
            this.panel1.TabIndex = 3;
            // 
            // dataGridViewProducts
            // 
            this.dataGridViewProducts.AllowUserToAddRows = false;
            this.dataGridViewProducts.BackgroundColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(224)))), ((int)(((byte)(192)))));
            this.dataGridViewProducts.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridViewProducts.Location = new System.Drawing.Point(3, 3);
            this.dataGridViewProducts.Name = "dataGridViewProducts";
            this.dataGridViewProducts.RowHeadersWidth = 62;
            this.dataGridViewProducts.RowTemplate.Height = 28;
            this.dataGridViewProducts.Size = new System.Drawing.Size(740, 367);
            this.dataGridViewProducts.TabIndex = 0;
            // 
            // textBoxSearchProducts
            // 
            this.textBoxSearchProducts.Location = new System.Drawing.Point(273, 139);
            this.textBoxSearchProducts.Name = "textBoxSearchProducts";
            this.textBoxSearchProducts.Size = new System.Drawing.Size(208, 26);
            this.textBoxSearchProducts.TabIndex = 4;
            // 
            // SearchProductButton
            // 
            this.SearchProductButton.Location = new System.Drawing.Point(287, 194);
            this.SearchProductButton.Name = "SearchProductButton";
            this.SearchProductButton.Size = new System.Drawing.Size(177, 50);
            this.SearchProductButton.TabIndex = 5;
            this.SearchProductButton.Text = "Search for Product";
            this.SearchProductButton.UseVisualStyleBackColor = true;
            this.SearchProductButton.Click += new System.EventHandler(this.SearchProductButton_Click);
            // 
            // ProductControl
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.LightSalmon;
            this.Controls.Add(this.SearchProductButton);
            this.Controls.Add(this.textBoxSearchProducts);
            this.Controls.Add(this.panel1);
            this.Controls.Add(this.DeleteProductbutton);
            this.Controls.Add(this.EditProductbutton);
            this.Controls.Add(this.AddProductbutton);
            this.Name = "ProductControl";
            this.Size = new System.Drawing.Size(762, 720);
            this.panel1.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridViewProducts)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button AddProductbutton;
        private System.Windows.Forms.Button EditProductbutton;
        private System.Windows.Forms.Button DeleteProductbutton;
        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.TextBox textBoxSearchProducts;
        private System.Windows.Forms.Button SearchProductButton;
        private System.Windows.Forms.DataGridView dataGridViewProducts;
    }
}
