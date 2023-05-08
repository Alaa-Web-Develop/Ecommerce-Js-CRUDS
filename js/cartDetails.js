//show product details who match the same id :
//find product that contain the same id :
let products = JSON.parse(localStorage.getItem('products'));
let productId = localStorage.getItem('productId');

let productDetails = products.find(item => item.id == productId);
console.log(productDetails);
let item =document.querySelector(".item-details");
item.innerHTML = `
<img src="${productDetails.imageurl}" alt="">
<h2>${productDetails.title}</h2>
<span>Size : ${productDetails.size}</span><br>
<span>Quantity : ${productDetails.qty}</span>
`;