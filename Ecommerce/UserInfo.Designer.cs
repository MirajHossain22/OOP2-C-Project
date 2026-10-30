namespace Ecommerce
{
    partial class UserInfo
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
            this.dataGridViewUsers = new System.Windows.Forms.DataGridView();
            this.editusers = new System.Windows.Forms.Button();
            this.deletebutton = new System.Windows.Forms.Button();
            this.UsersEdit = new System.Windows.Forms.Panel();
            this.textBoxSearchEmail = new System.Windows.Forms.TextBox();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridViewUsers)).BeginInit();
            this.SuspendLayout();
            // 
            // dataGridViewUsers
            // 
            this.dataGridViewUsers.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridViewUsers.GridColor = System.Drawing.Color.FromArgb(((int)(((byte)(192)))), ((int)(((byte)(255)))), ((int)(((byte)(255)))));
            this.dataGridViewUsers.Location = new System.Drawing.Point(3, 19);
            this.dataGridViewUsers.Name = "dataGridViewUsers";
            this.dataGridViewUsers.RowHeadersWidth = 62;
            this.dataGridViewUsers.RowTemplate.Height = 28;
            this.dataGridViewUsers.Size = new System.Drawing.Size(756, 254);
            this.dataGridViewUsers.TabIndex = 0;
            // 
            // editusers
            // 
            this.editusers.Font = new System.Drawing.Font("Palatino Linotype", 14F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.editusers.Location = new System.Drawing.Point(58, 309);
            this.editusers.Name = "editusers";
            this.editusers.Size = new System.Drawing.Size(134, 55);
            this.editusers.TabIndex = 1;
            this.editusers.Text = "Edit";
            this.editusers.UseVisualStyleBackColor = true;
            this.editusers.Click += new System.EventHandler(this.editusers_Click);
            // 
            // deletebutton
            // 
            this.deletebutton.Font = new System.Drawing.Font("Palatino Linotype", 14F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.deletebutton.Location = new System.Drawing.Point(546, 309);
            this.deletebutton.Name = "deletebutton";
            this.deletebutton.Size = new System.Drawing.Size(134, 55);
            this.deletebutton.TabIndex = 2;
            this.deletebutton.Text = "Delete";
            this.deletebutton.UseVisualStyleBackColor = true;
            this.deletebutton.Click += new System.EventHandler(this.deletebutton_Click);
            // 
            // UsersEdit
            // 
            this.UsersEdit.BackColor = System.Drawing.Color.LightSteelBlue;
            this.UsersEdit.Location = new System.Drawing.Point(0, 370);
            this.UsersEdit.Name = "UsersEdit";
            this.UsersEdit.Size = new System.Drawing.Size(756, 313);
            this.UsersEdit.TabIndex = 4;
            // 
            // textBoxSearchEmail
            // 
            this.textBoxSearchEmail.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.textBoxSearchEmail.Location = new System.Drawing.Point(277, 320);
            this.textBoxSearchEmail.Name = "textBoxSearchEmail";
            this.textBoxSearchEmail.Size = new System.Drawing.Size(190, 35);
            this.textBoxSearchEmail.TabIndex = 5;
            this.textBoxSearchEmail.Text = "Enter Email";
            this.textBoxSearchEmail.TextChanged += new System.EventHandler(this.textBoxSearchEmail_TextChanged);
            // 
            // UserInfo
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.Controls.Add(this.textBoxSearchEmail);
            this.Controls.Add(this.UsersEdit);
            this.Controls.Add(this.deletebutton);
            this.Controls.Add(this.editusers);
            this.Controls.Add(this.dataGridViewUsers);
            this.Name = "UserInfo";
            this.Size = new System.Drawing.Size(762, 720);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridViewUsers)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.DataGridView dataGridViewUsers;
        private System.Windows.Forms.Button editusers;
        private System.Windows.Forms.Button deletebutton;
        private System.Windows.Forms.Panel UsersEdit;
        private System.Windows.Forms.TextBox textBoxSearchEmail;
    }
}
