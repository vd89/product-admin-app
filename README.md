# E-commerce Product Admin App

> The application to add the products and see the products with category and details of the product

## Technology Used

> Node js,
> Express,
> Admin Panel - React Js
> Database - MongoDB

### Task 1

1. create user registration form with email and password validations
2. login user form
3. once user logged in their name and image show in top right of the header with logout button

### Task 2

1. create a product form, where fields are: name, description, status, category_id(searchable selectable dynamic category dropdown), attributes array
2. product attributes array contain following fields : attribute_name, attribute_price, images(array)
3. create product, only login user can able to create a product
4. fetch all products and display in table with pagination, product can be filtered by status(active, inactive), and category
5. edit product details and attribute details, also product can be set to inactive and active as well as product attributes too
6. clicking on product row on product table can lead to product details page where full product details with their category name and all product attributes in card design with their multiple images and name and price should display

---

## Quick Start 🚀

### Add a default.json file in config folder with the following

``` bash

{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
}

```

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run dev
```

heck in browser on [http://localhost:5000/](http://localhost:5000/)
