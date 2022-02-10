document.getElementById('login-submit').addEventListener('click', function(){

    // get user Email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    
    // get user password
    const passowrdField = document.getElementById('user-password');
    const userPassword = passowrdField.value;
    
    // check email and password
    if(userEmail == 'rasel@baap.com' && userPassword == 'secret'){
        window.location.href= 'banking.html'
    }

})