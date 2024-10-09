document.getElementById('myForm').addEventListener('submit',function(e){
    e.preventDefault();

    const name =document.getElementById('name').value.trim();
    const email=document.getElementById('email').value.trim();
    const password =document.getElementById('password').value.trim();

    const gender =document.getElementById('gender').value;
    const error =document.getElementById('error');

    if(name.length<4){
        error.textContent='Name must be at least 4 characters long';
    }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
        error.textContent='Enter valid email id';
    }else if(!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(password)){
        error.textContent='Password must be at least 8 characters and contain uppercase,lowercase and numbers';
    }else if(!gender){
        error.textContent="please enter a gender";
    }else {
        error.textContent="Form submitted successfully";
    }


});