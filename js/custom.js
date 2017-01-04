$(document).ready(function() {
    // importing navbar
    $('#nav-container').load('nav.html');
    // importing footer
    $('#footer-container').load('footer.html');
    // parallax
    $('.parallax').parallax();
    // updating website message
    Materialize.toast('Contents Update Soon!', 2000);
});
