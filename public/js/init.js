window.cart = {
  items: JSON.parse(localStorage.getItem('cart')).items ?? []
};

localStorage.setItem('cart', JSON.stringify(window.cart));
