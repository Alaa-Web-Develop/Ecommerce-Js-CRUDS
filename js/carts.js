
//get product that i add to cart only :

// let productsInCart = localStorage.getItem('productsInCart');

//if(productsInCart){ //if it is exist not null[may clear local storage]
    //productsInCart : i need to convert to object,because it is string
   // let items = JSON.parse(productsInCart);
   // drawCartProductsUI(items);

//استدعاء المنتجات فى اللوكال استوريج وتحويلها لاوبجيكت لانها استرنج والوب عليها اظهرها فى الصفحة :
let productsDom = document.querySelector(".products");
let noProduct = document.querySelector('.noProduct');
//let productsInCart = localStorage.getItem('productsInCart'); : in open page i will get alllocalstorage without the remove items,so the correct the true is to get storage in clicked remove


function drawCartProductsUI(allProducts=[]){ //default param

    //check if there is items in array or no to appear the div no product :
    if(JSON.parse(localStorage.getItem('productsInCart')).length === 0)noProduct.innerHTML = "There is no Items !!";
        
    
    let products = JSON.parse(localStorage.getItem('productsInCart')) || allProducts;

    let productsUI = products.map((item) => {
        return `
        <div class="product-item">
        <img src="${item.imageurl}" class="product-item-img" alt="image">

        <div class="product-item-desc">
            <h2>${item.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, optio!</p>
            <span>Size: ${item.size}</span><br>
            <span>Quantity : ${item.qty}</span> 
        </div>

        <div class="product-item-action">
            <button class="add-to-cart" onclick="removeItemFromCart(${item.id})">Remove From Product</button> 
        </div>
    </div>
        `;
    });
    productsDom.innerHTML=productsUI.join("");  
}
drawCartProductsUI();
//===================================
//remove item From Cart :with id i catch item and remove from array
function removeItemFromCart(id){
    let productsInCart = localStorage.getItem('productsInCart');
    if(productsInCart){
        let items = JSON.parse(productsInCart);
        let filteredItems = items.filter((item) => item.id !== id);

        
            localStorage.setItem("productsInCart",JSON.stringify(filteredItems)) ; // update local storage with same Nameهاتلى الاراى من غير ال انت دوست عليه 

            drawCartProductsUI(filteredItems);//show products again again
        }
    }

//items.filter((item) => item.id !==id) : هاتلى ال مش بيساويه وامسح ال بيساوى يعنى هيمسح ال انت دوست عليه ويسيب الباقى