document.getElementById('login-btn').addEventListener('click', function(){
    event.preventDefault();
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;

    const userPass = document.getElementById('user-pass');
    const password = userPass.value;
    if(email === 'najib@gmail.com' && password === '12345678'){
        console.log('valid user')
    }
    else{
        console.log('invalid user')
    }

})