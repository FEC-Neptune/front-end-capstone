# GalaxyCommerce

This repo represents the frontend React app for an e-commerce web application.The project includes three primary modules: a Product Overview module, a Related Products & Comparisons module, and a Reviews & Ratings module.

## Table of Contents

1. Description
    - Product Overview
    - Related Products & Comparisons
    - Reviews & Ratings
2. Installation
3. Usage
4. Technologies Used

## Description

A React app for an e-commerce website. This app contains Overview, Related Products and Comparisons, and Reviews modules.

This app interacts with the third-party Atelier API which provides the front-end with dynamically rendered content such as the products, images, reviews, related products, and product styles.

### Product Overview

The Product Overview module provides general information and images of the viewed product. Within the Product Overview module, a user can browse various photos of the selected product, select different styles of the product, and add a desired product to their cart after selecting a style, size, and quantity.

The Product Overview module's Image Gallery feature enables users to browse photos of the product. After clicking within the bounds of the Image Gallery, the Image Gallery view will expand to the full width of the webpage. To review the image in further detail, the user can then click within the bounds of the Image Gallery view to enable the Zoomed mode, which zooms the image to 2.5X the original scale of the image.

### Related Products & Comparisons

The Related Products and Comparisons module lists similar products and, when clicked, will show a comparison of features of the currently viewed product with the selected related product. Additionally this module grants the visitor the ability to add the currently viewed product to "My Wardrobe" which is a cookie-based persistent feature.

### Reviews & Ratings

The Reviews module provides the visitor with reviews of the currently viewed product. These reviews can be sorted by date created, helpfulness, or relevancy. Additionally reviews can be filtered by score. Within the Reviews module the visitor can also leave a review for the product.

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

## Technologies Used

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

## Contributing

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m "Add your message"`
4. Push your changes to your fork: `git push origin feature-name`
5. Create a pull request detailing your changes.

## Licensing

This project is licensed under the MIT License.