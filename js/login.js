document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if(email === 'sanju@mail.com' && password === 'sanju'){
        console.log('valid user');
    }
    else{
        console.log('invalid user');
    }

})