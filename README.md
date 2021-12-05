# shopfront

![typescipt](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![mui](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![node.js](https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=nodedotjs&logoColor=green)
![Express](https://img.shields.io/badge/-Express-20232A?style=for-the-badge&logo=express&logoColor=yellow)
![mongodb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

An E-commerce web application to purchase items, powered by Shopify

## JS Library/Framework

The front-end framework for this project is React.js.
The project utilized React hooks for more flexible development

## User Interactions

- The user is able to browse a list of products from a Shopify development store.

- The user is able to use the search bar on the home page to find products.

- The user is able to add the product to cart and update product quantity in cart.

- Cart content is stored in the browser, so the user is able to see items in the cart upon page refresh.

- The user is able to fill out an address form and payment information to complete the checkout process.

- The user is able to search for orders with the email address used at the time of checkout.

- After obtaining a list of previous orders, the user is able to update and delete each order.

## Backend service

- MongoDB is used as the database to store order information.

- Each order contains the user's shipping information and purchase details regarding item and quantity. No payment information is currently stored.

## Third Party RESTful API

Shopify Admin API

## UI library

MUI (formerly Material-UI)

## Reusable component

The Product component is a card that contains product information. It is shared across the catalog listing and cart content, each with additional elements to render relevant content.

The Address Form component is shared across the checkout process and edit order functionality.

## Installation

npm is the package management system for this project.

1. Install dependencies

  ```sh
  npm install
  cd client
  npm install
  ```

2. Create a `.env` file at the root directory

  ```js
  NODE_ENV=production OR development

  SERVER_PORT=YOUR_PREFERRED_PORT

  # Shopify API Variables
  username=YOUR_SHOPIFY_API_KEY
  password=YOUR_SHOPIFY_PASSWORD
  shop=YOUR_SHOPIFY_SHOP
  apiversion=2021-10
  resource=products

  # MongoDB Cloud Atlas
  MONGODB_URI=mongodb+srv://<YOUR_USERNAME>:<YOUR_PASSWORD>@<YOUR_CLUSTER>.ytgwd.mongodb.net/<YOUR_DATABASE>?retryWrites=true&w=majority
  ```

3. Run production server

  ```sh
  npm run start
  ```

4. Run production client

  ```sh
  npm run build
  ```
