let loginPage = document.querySelector("#login");
let signUpPage = document.querySelector("#sign-up");
let outputPage = document.querySelector("#output");
let signUp = document.querySelector("#signUp-btn");
let signEmail = document.querySelector("#sign-email");
let signpassword = document.querySelector("#signPassword");
let signName = document.querySelector("#sign-name");
let login = document.querySelector("#login-btn");
let signUp2 = document.querySelector("#sign-btn2");
let IsNameValid = document.querySelector("#nameAlert");
let IsEmailValid = document.querySelector("#emailAlert");
let IsPasswordValid = document.querySelector("#passwordAlert");
let success = document.querySelector("#successAlert");
let Exist = document.querySelector("#existAlert");
let loginEmail= document.querySelector("#email-input");
let loginPassword = document.querySelector("#password-input");
let loginalert = document.querySelector("#loginAlert");
let theUSername = document.querySelector("#theUserName");
let logOutBtn = document.querySelector("#logOutBtn");
let allUsers = [];

if(localStorage.getItem('allUsers')!=null){
    allUsers = JSON.parse(localStorage.getItem('allUsers'))
}

signUp.addEventListener("click", function () {
IsSignUp();
});

signUpPage.addEventListener("submit", function (e) {
e.preventDefault();

checkValidation()
});
login.addEventListener('click', function(){
    loginUser()
})
logOutBtn.addEventListener('click', function(){
    localStorage.removeItem('userName');
    outputPage.classList.replace('d-flex', 'd-none')
    loginPage.classList.replace('d-none', 'd-flex')
    recetLogin()
})


function addUser(){
    let newUser = {
        name: signName.value,
        email: signEmail.value,
        password:signpassword.value
    }
    if(IsAlreadyhere(newUser)==true){
        Exist.classList.replace("d-none", "d-block");
    }else{
        Exist.classList.replace("d-block", "d-none");
        success.classList.replace("d-none", "d-block");
    allUsers.push(newUser);
    console.log(allUsers);
    localStorage.setItem('allUsers',JSON.stringify(allUsers))
    recet();
    }
    }
    
    function IsAlreadyhere(newUser){
    for (let i = 0; i < allUsers.length; i++) {
        if(allUsers[i].email.toLowerCase()==newUser.email.toLowerCase()){
            return true
        }
    }
    }



function IsSignUp() {
signUpPage.classList.replace("d-none", "d-flex");
loginPage.classList.replace("d-flex", "d-none");
}

function validation(regex, element, alert) {
let pattern = regex;
if (pattern.test(element.value)) {
    alert.classList.replace("d-block", "d-none");
    return true;
} else {
    alert.classList.replace("d-none", "d-block");
    return false;
}
}


function checkValidation(){
if (
    validation(/^[a-z0-9_-]{3,15}$/, signName, IsNameValid) == true &&
    validation(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, signEmail, IsEmailValid)== true &&
    validation(/^(?=.*[A-Z])(?=.*[\w_])(?=.*\d).*$/,  signpassword , IsPasswordValid)==true
) {
    addUser()
}else{
console.log('somthing went wrong');
}
}


function loginUser(){
    let userData = {
        loginemail: loginEmail.value,
        loginpass: loginPassword.value
    }
    if(IsUserHasAccount(userData)== true){
        loginalert.classList.replace('d-block', 'd-none')
        outputPage.classList.replace('d-none', 'd-flex')
        loginPage.classList.replace('d-flex', 'd-none')
        }else{
            loginalert.classList.replace('d-none', 'd-block')
            }
            }
            
            function IsUserHasAccount(userData){
                for (let i = 0; i < allUsers.length; i++) {
                    if(allUsers[i].email.toLowerCase() == userData.loginemail.toLowerCase() && allUsers[i].password == userData.loginpass){
                        localStorage.setItem('userName', allUsers[i].name)
                        theUSername.innerHTML =  allUsers[i].name;
                        
        return true
    }
}
}


function recet(){
    signName.value='';
    signEmail.value='';
    signpassword.value='';
}
function recetLogin(){
    loginEmail.value ='';
    loginPassword.value ='';
}
