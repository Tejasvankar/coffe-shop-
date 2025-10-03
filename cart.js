document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.querySelector('.cart-items');
    const totalPrice = document.getElementById('total-price');

    displayCart();

    function displayCart() {
        const cartItemsData = JSON.parse(localStorage.getItem('cartItems')) || [];
        let total = 0;

        cartItems.innerHTML = '';

        cartItemsData.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
            total += item.price;
        });

        totalPrice.textContent = `$${total.toFixed(2)}`;
    }
});
