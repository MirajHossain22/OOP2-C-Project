# E-Commerce Management System

A C# desktop shopping application built as a university Object-Oriented Programming 2 (OOP2) course project. The application provides customer shopping screens and an administrator interface for managing products and user records, backed by Microsoft SQL Server.

## Technology stack

| Component | Technology |
| --- | --- |
| Language | C# |
| Framework | .NET Framework 4.8 |
| Desktop interface | Windows Forms |
| Data access | ADO.NET (`System.Data.SqlClient`) |
| Database | Microsoft SQL Server / LocalDB |
| Solution format | Visual Studio solution and C# project |

## Features

### Customer interface

- Account registration and login.
- Product browsing with names, prices, and images.
- Shopping cart with quantity updates and item removal.
- Cart total calculation.
- Demonstration checkout form with basic input validation; no payment gateway integration.

### Administrator interface

- Separate administrator login screen.
- Add, view, edit, delete, and search products.
- Associate products with categories.
- View and edit user records.

## Project structure

```text
E_Commerce app.sln       Visual Studio solution
Ecommerce/
  Ecommerce.csproj      Windows Forms project targeting .NET Framework 4.8
  Program.cs            Application entry point
  Form1.cs              Initial application screen
  UserLogin.cs          Customer login
  Register.cs           Account registration
  UserPanel.cs          Product browsing and shopping cart
  AdminLogin.cs         Administrator login
  AdminPanel.cs         Administrator interface
  ProductControl.cs     Product listing, search, and deletion
  AddProductForm.cs     Product creation
  EditProductForm.cs    Product editing
  payment.cs            Demonstration checkout form
  Resources/            Interface images and resources
SQLQuery1.sql           Cart-to-product foreign-key alteration
```

Windows Forms layout code is stored in the corresponding `.Designer.cs` files.

## Local setup

### Prerequisites

- Windows.
- Visual Studio with the **.NET desktop development** workload and .NET Framework 4.8 targeting support.
- Microsoft SQL Server or SQL Server Express LocalDB.
- A compatible database schema and sample data.

### Setup status

**The included files do not currently provide a complete database initialization script or database file.** `SQLQuery1.sql` only adds a foreign-key constraint to existing tables. Database restoration or schema reconstruction is required before the database-backed features can run.

1. Clone this repository: `git clone https://github.com/MirajHossain22/OOP2-C-Project.git`.
2. Open `E_Commerce app.sln` in Visual Studio.
3. Restore the original database if available, or create a compatible schema based on the SQL queries in the source. Referenced tables include `UsersInfo`, `Products`, `Categories`, `Cart`, and `Payments`.
4. Update the connection strings in the C# source files. They currently reference a developer-specific `.mdf` file path. Search for `AttachDbFilename` to find them.
5. Review product image paths and use local sample images as needed.
6. Build the solution and start the application from Visual Studio.

The original administrator demonstration credentials are hardcoded in `AdminLogin.cs` as `admin` / `1234`. Use synthetic accounts and payment inputs when exploring this course project.

## Learning demonstrated

- Building event-driven desktop interfaces with C# and Windows Forms.
- Implementing database CRUD operations through ADO.NET.
- Using parameterized SQL queries for data retrieval and updates.
- Joining product and category records and searching by product name.
- Implementing shopping-cart quantity handling and total calculation.
- Validating form input and displaying database error feedback.

## Current limitations

This repository represents an educational desktop application. It does not currently implement an ASP.NET Core backend, REST API, Entity Framework integration, or an automated test suite.

- Database connection strings are repeated across form classes and contain machine-specific paths.
- Customer passwords are stored and compared as plaintext; administrator credentials are hardcoded.
- The demonstration checkout stores card numbers and CVVs. It must not be used with real payment information.
- Cart queries are not scoped to the logged-in customer.
- Database operations and interface logic are combined in form classes.
- A complete database setup script is missing.

## Possible future improvements

These are planned directions, not implemented features:

- Provide a reproducible database schema and synthetic seed data.
- Centralize configuration and separate data access from interface code.
- Replace plaintext password handling with password hashing and scope carts to authenticated users.
- Replace payment-detail storage with a simulated checkout that stores no sensitive card information.
- Add tests for cart calculations, validation, and database behavior.
- Develop an ASP.NET Core REST API with Entity Framework Core as a subsequent extension.

## Background

Originally developed for a university OOP2 course and shared as a ZIP archive. The source is now available directly in the repository for browsing and review. The original archive remains available in the Git history, and the course report is included as [Online_Shop_Csharp_project Sec-M.pdf](Online_Shop_Csharp_project%20Sec-M.pdf).
