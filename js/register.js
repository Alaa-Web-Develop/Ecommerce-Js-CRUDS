//Register user
let username = document.querySelector("#username"); //get element
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let register_btn = document.querySelector("#signup");


register_btn.addEventListener('click',register);

function register(e){
    e.preventDefault(); //stop default to form
    
    if(username.value === "" || email.value === "" || password.value === ""){
        alert("please Fill Data")
    }else{
        //save data in localstrg
        localStorage.setItem('username',username.value);
        localStorage.setItem('email',email.value);
        localStorage.setItem('password',password.value); //خطا حفظ الباسورد بدون تشفير
    
        //send request and wait 2 seconds to responce and talkin
        setTimeout(() => {window.location = "login.html"} , 1500)
    
    }
    }