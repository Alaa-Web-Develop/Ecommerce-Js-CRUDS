
//======products================================== :

let productsDom = document.querySelector(".products");
let cartProductMenu = document.querySelector('.carts-product');
let cartProductDom = document.querySelector('.carts-product div');
let badgeDom = document.querySelector(".badge");
let shoppingCartIcon = document.querySelector(".shoppingCart");

// let products = JSON.parse(localStorage.getItem('products'));
let products = productsDB;

//=========================================
//open Cart Menu :
//function to appear productscart;
// openCartMenu بدون الاقواس وهذا هو الاصح ومهناه انى بشاور على الفانكشن فمعناه انى شغال فى الفانكشن بدون ما اعمل كليك
shoppingCartIcon.addEventListener('click',openCartMenu);

function openCartMenu(){
    // dont open if titles div is empty and toogle the action لو ظاهر اخفيه لو مختفى اهره:
   if(cartProductDom.innerHTML != ""){
       //cartProductMenu
       //لو مش فاضى اظهره واخفيه
       if(cartProductMenu.style.display =='block'){
        cartProductMenu.style.display ='none';
       }else{
        cartProductMenu.style.display ='block';
        
       }
   }
}
//======================================
// drawProductsUI : immediatly func  لا يصح منادتها فى الخارج
//ولو عاوز اخليها سيلف انفوك وابعتلها باراميتير عشان اشغلها فى مكان تانى , ضعها فى متغير
let drawProductsUI;
(drawProductsUI = function(products = []){
    //loop products and put in html
    let productsUI = products.map((item) => {
        // console.log("eee",item);
        return `
        <div class="product-item">
        <img src="${item.imageurl}" class="product-item-img" alt="image">

        <div class="product-item-desc">
            <a onclick="saveItemData(${item.id})">${item.title}</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, optio!</p>
            <span>Size: ${item.size}</span>
        </div>

        <div class="product-item-action">
            <button class="add-to-cart" onclick="addedToCart(${item.id})">Add To Cart</button>
            <i class="favorite far fa-heart" style="color:${item.liked == true ? "red" : ""}" onclick="addedTofavorite(${item.id})"></i> 
        </div>
    </div>
        `
    });
    productsDom.innerHTML=productsUI.join("");//لحذف الكوموا بين عناصر الاراى والتى ظهرت فى الصفحة
})(JSON.parse(localStorage.getItem('products')) || products);
//(JSON.parse(localStorage.getItem('products')) || products)يعنى مع اول ريفرش لو مفيش لوكال استوريج هات الدايات دى بى
//عشان اهرب من ثبات الداتا فى اول مرة لو مفيش حاجه فى اللوكال استوريج ال حدثتها وفيها الفافوريت وفى اول الرن هاتلى الداتا ال من غير فافورت
// send aparameter
//drawProductsUI(); // run function when open the page,or infoke function,immidiately func : run automatic without run it,define and call it in the same time
function addfovorite(id){
    let choosenItem = products.find(item => item.id === id);
    console.log(choosenItem);
    choosenItem.style.color = 'red';
    // choosenItem.style.backgroundColor = "red";
}

//=======================================
//check if thers is items in local storage :

//لما تعمل ريفرش بيجيب الاداد ايتم من اللوكال استوريج
    let addedItem = 
    localStorage.getItem('productsInCart') ?
    JSON.parse(localStorage.getItem('productsInCart')) :
    [];
  
    if(addedItem){
        addedItem.map((item)=> {
        cartProductDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;
        });
        
        badgeDom.style.display = 'block';
        badgeDom.innerHTML += addedItem.length;
    }

    //save product that choosen every time in array,array must not be null in first to save product in local storage , must make acondition :
    

//add to cart=======


    function addedToCart(id){
    if(localStorage.getItem('username')){

//function check if user not login when click add to cart
//catch item with id to add to cart :
        let choosen = products.find((item) => item.id === id);
        //check if i the choosen exists and save it without duplicate , orsave it in array :
        let isProductInCart = addedItem.some(x => x.id === choosen.id);
        //find >>return object , some return true or false
        //allItems.find(x = if allitems empty then you find in empty array and result is undefined or false
        //duplicated item in array
        if(isProductInCart){ //دائما فارغة هترجع بانديفايند او فولس
            // if choosen duplicted increase quantity:
            //update added item if i choose product more than one , increase qty :
            addedItem = addedItem.map((p) => { 
                if(p.id === choosen.id) p.qty +=1;
                return p;
            });
           

        }else{
            addedItem.push(choosen); // not duplicated
        }

        // UI 
        cartProductDom.innerHTML = "";
        addedItem.forEach((item) => {
            cartProductDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;
        })
       
          //filter ==> result array of object
          //find ==> result object <loop in all item in array and get choosen item<object> taht match id = id
      
          //save  choosen in localstorage :
          //object to string >> JSON.stringfy(),string to object JSON.parse()

         
          //ستظهر مشكلة ان الاراى آدد أيتم سيظهر بها المنتجات المختارة مكررة فى صفحة فيو أول بروداكتس ولابد من حذف المكرر فيها ايضا  ووضع الكمية فى صفحة الكارتس
          // يعنى اللوكال استوريج ال هيظهر فى صفحة الكارتس هيحفتظ بالمنتجات مكررة
      
        //   let uniqueProducts = getUniqueArr(addedItem,"id");

        //save Data :
          localStorage.setItem('productsInCart',JSON.stringify(addedItem));

          //increase badge number product :
          //first appear counter 
          //number of titles is products number   p  query selectorall array.length
      
          //define array in functionلانها لو اتعرفت بالاعلى سيكون النتيجة مع كل ريفريش بصفر

          //Add counter of items :
          let cartItems = document.querySelectorAll(".carts-product div p");
          badgeDom.style.display ="block";
          badgeDom.innerHTML = cartItems.length;   
    } 
    else{
        window.location = "login.html";
    }
}
//============get unique array===========
function getUniqueArr(arr , filterType){ //(array,filter with)
//Get all id of elements you add in array:
//let unique = arr.map(item => item[filterType]); //result is array of id
//console.log(unique);
// i want to put id one time only in array,no duplicated id
//catch id index : 
//map(current element , curren element index , final array[1,2,3])
//map(item,i,final) يعنى هاتلى الانديكس بتاع الاراى دى
// خلى بالك انا ماسك الاراى ال طالع من الماب الاولى بالفاينال
//final.indexOf(item) === i && i  يعنى لو الانديكس بتاع العنصر ال انت دوست عليه هو نفسه رجعهولى
let unique = arr.map(item => item[filterType])
.map((item,i,final) => final.indexOf(item) === i && i)//mean this map cant contain same index in final array and its result will be false in array
//Here i catch choosen items indexes in added array , and if i choose duplicated product return his index with false because his id is duplicated
.filter(item => arr[item]) // then filter false from final array
.map(item => arr[item]) //  رجعلى الاوبجيكتس - رجعلى الايتمس الاصلية

return unique; // وروح استمله فى رن الفانكش فوق
}

//=======Localstorage don't save object  save string only وهذا من عيوبها
//=================================
function saveItemData(id){
    localStorage.setItem('productId',id);
    window.location = "cartDetails.html";
}
//===============Search=============
let input = document.getElementById("search");
input.addEventListener('keyup',function(e){
    //if(e.keyCode === 13){ // mean if press enter
        //تحسين الكود بحيث يبحث باى حرف او كلمة مباشرة بدون ما اغضط انتر
        search(e.target.value , JSON.parse(localStorage.getItem('products')));
    
    if(e.target.value.trim() === ""){
        drawProductsUI(JSON.parse(localStorage.getItem("products")))
    }
});


function search(title,myArray){
    //loop products.title === title

    // for(let x=0;x<myArray.length;x++){
    //     if(myArray[x].title === title){
    //         console.log(myArray[x]);
    //     }
    // }

    //let arr = myArray.filter(item => item.title === title);
    //تحسين الكود بحيث يبحث باى حرف او كلمة مباشرة بدون ما اغضط انتر
    let arr = myArray.filter(item => item.title.indexOf(title) !== -1);
    drawProductsUI(arr);
}


//================
//add to favorite=======لو داخل من يوزر ولو لأ روح لوجين
    let favoriteItem =localStorage.getItem('productsfavorite')?JSON.parse(localStorage.getItem("productsfavorite")):
    []; //عشان لما تضيف فى الاراى يحتفظ بالقديم
    function addedTofavorite(id){
    if(localStorage.getItem('username')){
        let choosenItem = products.find((item) => item.id === id);
        //تغيير لوم القلب باضافة كى الى الابوجيكت ثم مناداة الدرو تانى ومعاها الكى
        choosenItem.liked = true;
        favoriteItem = [...favoriteItem,choosenItem];
        //نفذ لوجيك اليونيك :
        let uniqueProduct = getUniqueArr(favoriteItem,"id");
          localStorage.setItem('productsfavorite',JSON.stringify(uniqueProduct));
          //draw products again with red heart what i choose :
          products.map(item => {
              if(item.id === choosenItem.id){
                  item.liked = true;
              }
          });
          localStorage.setItem('products',JSON.stringify(products)); // update i didnt change localstorage name.
          drawProductsUI(products);

           
    }  
    else{
        window.location = "login.html";
    }
}