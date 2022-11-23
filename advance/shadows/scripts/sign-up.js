var login = O('login')
var modalLogin = O('modalLogin')
var closeLog = O('closeLog');
var button = O('signUp');
var close = O('close');
var modal = O('modal') 

button.addEventListener('click', function (event)
{
    event.preventDefault();
    S(modal).display = 'block';
    console.log("clicked")
})

close.addEventListener('click', function (event)
{
    event.preventDefault();
    S(modal).display = 'none';
})

login.addEventListener('click', function (event)
{
    event.preventDefault();
    S(modalLogin).display = 'block';
    console.log("clicked")
})

closeLog.addEventListener('click', function (event)
{
    event.preventDefault();
    S(modalLogin).display = 'none';
    console.log('close');
})

