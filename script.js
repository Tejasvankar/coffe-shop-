document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemName = button.dataset.item;
            const itemPrice = parseFloat(button.dataset.price);

            addToCart(itemName, itemPrice);
        });
    });

    function addToCart(name, price) {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        cartItems.push({ name, price });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
});
