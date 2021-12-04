const sign_Up_Btn = document.querySelector('#Sign-up-btn');
const password_input_container = document.querySelector('.password-input-cont');
const username_cont = document.querySelector('.username-cont ');

sign_Up_Btn.addEventListener('click',e=>{
password_input_container.classList.remove('temp-password-input-cont');
username_cont.classList.remove('temp-username-cont');
    

});