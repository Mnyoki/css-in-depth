(function () {
    var toggle = document.getElementsByClassName('dropdown__toggle')[0];
    var dropdown = toggle.parentElement;
    toggle.addEventListener('click', function (e) {
        e.preventDefault();
        dropdown.classList.toggle('is-open');
    });
}());