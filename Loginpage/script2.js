let email= document.getElementById('email');
let Password=document.getElementById('Password');
let span= document.getElementById('span');

email.onkeydown=function(){
    const regex= /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
    const regexo= /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;
    if(regex.test(email.value)|| regexo.test(email.value)){
        span[0].innerText="your email is valid";
        span[0].style.color='lime';
    }
}