# Frontend Capstone Project - GalaxyCommerce

This React app is a fully functional e-commerce web application.The project includes three primary modules: an Overview, a Related Product & Comparisons, and a Reviews module.


## Table of Contents

1. Description
2. Installation
3. Usage

## Description

A React app for an e-commerce website. This app contains Overview, Related Products and Comparisons, and Reviews modules. The Overview module provides general information and images of the viewed product. The Related Products and Comparisons module lists similar products and, when clicked, will show a comparison of features of the currently viewed product with the selected related product. Additionally this module grants the visitor the ability to add the currently viewed product to "My Wardrobe" which is a cookie-based persistent feature. The Reviews module provides the visitor with reviews of the currently viewed product. These reviews can be sorted by date created, helpfulness, or relevancy. Additionally reviews can be filtered by score. Within the Reviews module the visitor can also leave a review for the product.

This app interacts with the third-party Atelier API which provides the front-end with dynamically rendered content such as the products, images, reviews, related products, and product styles.

## Installation

To install this app clone the repository and then use the terminal command:

```
npm install
```

To run the app you will need to add a ```config.js``` file in the root directory and include your GitHub token. Reference the ```config.example.js``` file for formatting.

Once the token has been added to the project, run the following terminal command to compile and serve the app locally:

```
npm run client-dev
```


