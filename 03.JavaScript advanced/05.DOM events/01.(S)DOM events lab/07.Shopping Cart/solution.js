function solve() {
  const output = document.querySelector('textarea');
  const products = Array.from(document.querySelectorAll('.product'));
  let boughtProducts = {};

  function addProduct(event) {
    if (event.target.className === 'add-product') {
      const name =
        event.target.parentElement.parentElement.querySelector(
          '.product-title'
        ).textContent;
      const price = event.target.parentElement.parentElement.querySelector(
        '.product-line-price'
      ).textContent;
      output.value += `Added ${name} for ${Number(price).toFixed(
        2
      )} to the cart.\n`;

      if (!boughtProducts[name]) {
        boughtProducts[name] = { price, quantity: 1 };
      } else {
        boughtProducts[name].quantity += 1;
      }
    }
  }

  function checkout() {
    btnCheckout.removeEventListener('click', checkout);

    products.forEach((product) => {
      product.removeEventListener('click', addProduct);
    });

    let totalPrice = 0;
    let productsArray = [];

    for (let product in boughtProducts) {
      productsArray.push(product);
      totalPrice +=
        Number(boughtProducts[product].price) *
        boughtProducts[product].quantity;
    }
    output.value += `You bought ${productsArray.join(
      ', '
    )} for ${totalPrice.toFixed(2)}.`;
  }

  products.forEach((product) => {
    product.addEventListener('click', addProduct);
  });

  const btnCheckout = document.querySelector('.checkout');

  btnCheckout.addEventListener('click', checkout);
}
