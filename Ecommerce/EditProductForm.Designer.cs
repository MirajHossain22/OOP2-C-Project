namespace Ecommerce
{
    partial class EditProductForm
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
            this.Editbutton = new System.Windows.Forms.Button();
            this.textBoxPriceedit = new System.Windows.Forms.TextBox();
            this.textBoxProductNameedit = new System.Windows.Forms.TextBox();
            this.comboBoxCategoryedit = new System.Windows.Forms.ComboBox();
            this.label4 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.openFileDialog1 = new System.Windows.Forms.OpenFileDialog();
            this.pictureBoxProductImageedit = new System.Windows.Forms.PictureBox();
            this.BrowseButton = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBoxProductImageedit)).BeginInit();
            this.SuspendLayout();
            // 
            // Editbutton
            // 
            this.Editbutton.Location = new System.Drawing.Point(195, 330);
            this.Editbutton.Name = "Editbutton";
            this.Editbutton.Size = new System.Drawing.Size(154, 44);
            this.Editbutton.TabIndex = 15;
            this.Editbutton.Text = "Save";
            this.Editbutton.UseVisualStyleBackColor = true;
            this.Editbutton.Click += new System.EventHandler(this.Editbutton_Click);
            // 
            // textBoxPriceedit
            // 
            this.textBoxPriceedit.Location = new System.Drawing.Point(195, 246);
            this.textBoxPriceedit.Name = "textBoxPriceedit";
            this.textBoxPriceedit.Size = new System.Drawing.Size(222, 26);
            this.textBoxPriceedit.TabIndex = 14;
            // 
            // textBoxProductNameedit
            // 
            this.textBoxProductNameedit.Location = new System.Drawing.Point(195, 153);
            this.textBoxProductNameedit.Name = "textBoxProductNameedit";
            this.textBoxProductNameedit.Size = new System.Drawing.Size(222, 26);
            this.textBoxProductNameedit.TabIndex = 13;
            // 
            // comboBoxCategoryedit
            // 
            this.comboBoxCategoryedit.FormattingEnabled = true;
            this.comboBoxCategoryedit.Location = new System.Drawing.Point(195, 63);
            this.comboBoxCategoryedit.Name = "comboBoxCategoryedit";
            this.comboBoxCategoryedit.Size = new System.Drawing.Size(222, 28);
            this.comboBoxCategoryedit.TabIndex = 12;
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(214, 261);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(0, 20);
            this.label4.TabIndex = 11;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label3.Location = new System.Drawing.Point(33, 59);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(137, 32);
            this.label3.TabIndex = 10;
            this.label3.Text = "Category";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.Location = new System.Drawing.Point(33, 239);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(84, 32);
            this.label2.TabIndex = 9;
            this.label2.Text = "Price";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(33, 146);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(93, 32);
            this.label1.TabIndex = 8;
            this.label1.Text = "Name";
            // 
            // openFileDialog1
            // 
            this.openFileDialog1.FileName = "openFileDialog1";
            // 
            // pictureBoxProductImageedit
            // 
            this.pictureBoxProductImageedit.Location = new System.Drawing.Point(491, 63);
            this.pictureBoxProductImageedit.Name = "pictureBoxProductImageedit";
            this.pictureBoxProductImageedit.Size = new System.Drawing.Size(225, 208);
            this.pictureBoxProductImageedit.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBoxProductImageedit.TabIndex = 16;
            this.pictureBoxProductImageedit.TabStop = false;
            // 
            // BrowseButton
            // 
            this.BrowseButton.Location = new System.Drawing.Point(547, 301);
            this.BrowseButton.Name = "BrowseButton";
            this.BrowseButton.Size = new System.Drawing.Size(105, 44);
            this.BrowseButton.TabIndex = 17;
            this.BrowseButton.Text = "Browse";
            this.BrowseButton.UseVisualStyleBackColor = true;
            this.BrowseButton.Click += new System.EventHandler(this.BrowseButton_Click_1);
            // 
            // EditProductForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.Salmon;
            this.ClientSize = new System.Drawing.Size(728, 404);
            this.Controls.Add(this.BrowseButton);
            this.Controls.Add(this.pictureBoxProductImageedit);
            this.Controls.Add(this.Editbutton);
            this.Controls.Add(this.textBoxPriceedit);
            this.Controls.Add(this.textBoxProductNameedit);
            this.Controls.Add(this.comboBoxCategoryedit);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Name = "EditProductForm";
            this.Text = "EditProductForm";
            ((System.ComponentModel.ISupportInitialize)(this.pictureBoxProductImageedit)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button Editbutton;
        private System.Windows.Forms.TextBox textBoxPriceedit;
        private System.Windows.Forms.TextBox textBoxProductNameedit;
        private System.Windows.Forms.ComboBox comboBoxCategoryedit;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.OpenFileDialog openFileDialog1;
        private System.Windows.Forms.PictureBox pictureBoxProductImageedit;
        private System.Windows.Forms.Button BrowseButton;
    }
}