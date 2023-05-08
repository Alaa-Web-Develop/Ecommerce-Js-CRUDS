let productsDB = [
    {
        id:1,
        title:"headphone",
        size:"large",
        imageurl:"images/headphone.jpg",
        qty:1
},
{
    id:2,
    title:"laptop",
    size:"large",
    imageurl:"images/lab.jpg",
    qty:1

},
{
    id:3,
    title:"watch",
    size:"meduim",
    imageurl:"images/watch.jpg",
    qty:1

},
{
    id:4,
    title:"glassess",
    size:"large",
    imageurl:"images/glasses.jpg",
    qty:1

},
];
//فيه مشكلة مع الفافورت : كل مرة بيمسك البروداكتس من هنا ثابته وبيختفى الفافورتس
// واحنا فى فانكشن الفافورت بيتقوله عديلى على المنتجات ال اختارتها وضيف لها بربرتى لايكيد عشان اغير لون القلب
//وقوله بعد كدا حدث الداتا لكن بتيجى تعمل ريفرش ويشيل الالوان لانه حمل الاسكريبت تانى ومفيش فيه اللايكد
//يعنى كل ما نعمل ريفرش بنجيب تانى من فايل الداتا ونشيل كل حاجه لايكد لان دى مش زى الكمية ال لها بربورتى ثابته وبتتغير قيمتها لأ ان بضيف البروبرتى نفسها
// localStorage.setItem('products',JSON.stringify(productsDB));//i don't need include script data.js in my pages