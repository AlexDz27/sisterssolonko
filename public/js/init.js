const cart = {
  items: localStorage.getItem('cart').items ?? []
};

localStorage.setItem('cart', JSON.stringify(cart));
