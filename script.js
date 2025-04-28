// Cart Popup Functionality
const cartButton = document.querySelector('.nav-right a:last-child');

cartButton.addEventListener('click', (e) => {
    e.preventDefault();
    alert('🛒 Your cart is currently empty.\nStart shopping and fill it with Bastar beauties!');
});
