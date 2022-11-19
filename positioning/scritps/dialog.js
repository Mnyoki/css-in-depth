var button = O('open');
var close = O('close');
var modal = O('modal') 

button.addEventListener('click', function (event)
{
    event.preventDefault();
    S(modal).display = 'block';
})

close.addEventListener('click', function (event)
{
    event.preventDefault();
    S(modal).display = 'none';
})


//Dropdown js
var mainMenu = O('mainMenu');
var dropdownMenu = O('dropdownMenu');

mainMenu.addEventListener('click', function(event)
{
    event.preventDefault();
    dropdownMenu.toogle();
})