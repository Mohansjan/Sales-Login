// Example function to get product image URL
const getProductImage = (productId) => {
    // Replace with your actual logic to fetch or determine image URL
    switch (productId) {
        case 1:
            return '/path/to/product1_image.jpg';
        case 2:
            return '/path/to/product2_image.jpg';
        default:
            return '/path/to/default_image.jpg';
    }
};

export default getProductImage;
