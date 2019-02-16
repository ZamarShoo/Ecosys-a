$('.mobileMenu').hide();
    
    $('.burger').on('click', function(){
        $('.mobileMenu').slideToggle(100);
    })

$(document).ready(function(){

});

const anchors = document.querySelectorAll('a[href="about"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href')

        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}