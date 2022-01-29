let userName= document.getElementById('Name');
let emailReg = document.getElementById('email');
let passwordReg=document.getElementById('Password');
// let span= document.getElementsByTagName('span');
let signUp = document.getElementById("signup");

signUp.addEventListener("click",(e)=>{
    e.preventDefault();
    // let userName = userName.value.trim();
    // let emailReg = emailReg.value.trim();
    // let passwordReg =passwordReg.value.trim();
    console.log(userName.value)
    fetch("https://limitless-meadow-43468.herokuapp.com/api/user/register",{
        method: "POST",
        headers:{
            "content-Type":"application/json",
            "Access-Control-Allow-Orgin":"*"
        },
        body:JSON.stringify({
            name:userName.value,
            email: emailReg.value,
            password:passwordReg.value,
        })
    }).then(res=>res.json()).then(data=>{
        if(data.status === 400) {
            return console.log("")
        }else{
            if(data.status === 200){
               return location.href ="http://127.0.0.1:5500/Loginpage/index.html"
            }
        }
    })
})