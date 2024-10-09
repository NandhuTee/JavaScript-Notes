const welcomeMessage = document.createElement('div');
welcomeMessage.innerHTML = `<h2>******************</h2>`;
document.body.appendChild(welcomeMessage);

const generateBTN =document.getElementById("generatebtn");
const PasswordInput =document.getElementById("password");

generateBTN.addEventListener('click',()=>{
    const chars ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password='';

    for(let i=0;i<8;i++){
        password+=chars.charAt(Math.floor(Math.random()*chars.length));
    }

   PasswordInput.value=password;

})