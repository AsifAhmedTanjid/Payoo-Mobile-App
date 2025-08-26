// console.log('script.js connected');
document.getElementById('login-button').addEventListener('click',function(e){
    e.preventDefault();
    // console.log('button clicked');
    // console.log(e);
    const mobileNumber= 1812444020;
    const pinNumber=1234;
    const mobileNumberValue = parseInt(document.getElementById('mobile-number').value);
    const pinNumberValue = parseInt(document.getElementById('pin-number').value)

    if(mobileNumber===mobileNumberValue && pinNumber===pinNumberValue){
        window.location.href ='./home.html'
    }
    else
    {
        alert('invalid Credentials');
    }
    

})