const addToCartButtons = document.querySelectorAll('#addToCartButton');

addToCartButtons.forEach((button) => {
  button.addEventListener('click', (evt) => {
    const dress = evt.target.dataset.dress;

    console.log(dress)

    // localStorage.setItem('cart')
  });
});
