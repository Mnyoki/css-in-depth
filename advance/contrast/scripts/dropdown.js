/* 
(function () 
{
   
    var toggle = document.querySelector('dropdown-label');
    toggle.addEventListener('click', function (event) {
        event.preventDefault();
        var dropdown = event.target.parentNode;
        dropdown.classList.toggle('is-open');
        console.log("clicked")
    });


    var main = document.getElementById('mainMenu')
    main.addEventListener('click', function (event)
    {
        
        event.preventDefault();
        var dropdown = document.getElementsByClassName('submenu');
        dropdown.toggle();
        console.log("clicked")
    })
}())

*/

$('#mainMenu').click(function () 
{
    $('.top-nav').slideToggle('slow', 'linear');
    console.log('clicked')
    console.log(window.innerWidth);
})
