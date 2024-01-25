const addProduct = () => {
  const productField = document.getElementById('product-name');
  const quantityField = document.getElementById('quantity');
  const product = productField.value;
  const quantity = quantityField.value;
  productField.value = '';
  quantityField.value = '';
  console.log(product, quantity);

  displayProduct(product, quantity);
  saveProductToLocalStorage(product, quantity);
};

const displayProduct = (product, quantity) => {
  const ul = document.getElementById('product-container');
  const li = document.createElement('li');
  li.innerText = `${product}: ${quantity}`;
  ul.appendChild(li);
};

const getStoredShoppingCurt = () => {
  let cart = {};
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveProductToLocalStorage = (product, quantity) => {
  const cart = getStoredShoppingCurt();
  console.log(cart);
  cart[product] = quantity;
  const cartStringify = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringify);
};

const displayProductFromLocalStorage = () => {
  const savedCart = getStoredShoppingCurt();
  console.log(savedCart);
  for (const product in savedCart) {
    const quantity = savedCart[product];
    console.log(product, quantity);
    displayProduct(product, quantity);
  }
};
displayProductFromLocalStorage();
