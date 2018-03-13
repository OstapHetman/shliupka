// Scroll Top
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function() { $(".scroll").click(function() { $("html,body").animate({ scrollTop: $("#navbarCollapse").offset().top }, "3000"); return false }) })

// Smooth anchor
$(document).ready(function() {
    // Add smooth scrolling to all links
    $(".smooth").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
// Dynamical text
window.onload = function() {
    var title = document.getElementById('titleText'),
        btn = document.getElementById('buttonSubmit'),
        getBtns = document.getElementsByClassName('paste-btn'),
        lengthBtns = getBtns.length;
    for (let i = 0; i < lengthBtns; i++) {
        getBtns[i].onclick = function() {
            let titleText = this.getAttribute('data-title');
            let btnText = this.getAttribute('data-btn');
            title.innerText = titleText;
            btn.innerText = btnText;
        }
    }
}