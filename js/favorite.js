

let productsDom = document.querySelector(".products");
let noProduct = document.querySelector('.noProduct');



function drawfavoritesProductsUI(allProducts=[]){ 

    if(JSON.parse(localStorage.getItem('productsfavorite')).length === 0)noProduct.innerHTML = "There is no Items !!";
        
    
    let products = JSON.parse(localStorage.getItem('productsfavorite')) || allProducts;

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
            <button class="add-to-cart" onclick="removeItemFromCart(${item.id})">Remove From favorite</button> 
        </div>
    </div>
        `;
    });
    productsDom.innerHTML=productsUI.join("");  
}
drawfavoritesProductsUI();

//===================================
// remove item From Cart :with id i catch item and remove from array

function removeItemFromCart(id){
    let productsFavorite = localStorage.getItem('productsfavorite');
    if(productsFavorite){
        let items = JSON.parse(productsFavorite);
        let filteredItems = items.filter((item) => item.id !== id);

            localStorage.setItem("productsfavorite",JSON.stringify(filteredItems)) ;  

            drawfavoritesProductsUI(filteredItems);
        }
    }

