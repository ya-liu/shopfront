# shopfront

An E-commerce web application to purchase items, powered by Shopify

## JS Library/Framework

React.js

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
