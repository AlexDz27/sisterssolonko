const addToCartButtons = document.querySelectorAll('#addToCartButton');

addToCartButtons.forEach((button) => {
  button.addEventListener('click', (evt) => {
    const chosenDressId = Number(evt.target.dataset.dressId);
    const chosenDress = window.dresses.find(dress => dress.id === chosenDressId);

    window.cart.items.push(chosenDress);

    localStorage.setItem('cart', JSON.stringify(window.cart));
  });
});
