let email = "";
let password = "";

function register() {

    // Clear old messages
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passError.innerHTML = "";
    registerMessage.innerHTML = "";

    let name = document.getElementById("regName").value;
    let userEmail = document.getElementById("regEmail").value;
    let userPassword = document.getElementById("regPassword").value;

    let valid = true;

    if(name==""){
        nameError.innerHTML="Enter Name";
        valid=false;
    }

    if(userEmail==""){
        emailError.innerHTML="Enter Email";
        valid=false;
    }

    if(userPassword==""){
        passError.innerHTML="Enter Password";
        valid=false;
    }

    if(valid){
        email=userEmail;
        password=userPassword;
        registerMessage.innerHTML="Registration Successful";
    }

}

function login(){

    loginEmailError.innerHTML="";
    loginPassError.innerHTML="";
    loginMessage.innerHTML="";

    let loginEmail=document.getElementById("loginEmail").value;
    let loginPassword=document.getElementById("loginPassword").value;

    if(loginEmail==""){
        loginEmailError.innerHTML="Enter Email";
        return;
    }

    if(loginPassword==""){
        loginPassError.innerHTML="Enter Password";
        return;
    }

    if(loginEmail==email && loginPassword==password){
        loginMessage.innerHTML="Login Successful";
    }
    else{
        loginMessage.style.color="red";
        loginMessage.innerHTML="Invalid Email or Password";
    }

}