//Menu

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const links = document.querySelectorAll('nav ul li a')
const header = document.querySelector("#header")

const navHeight = header.offsetHeight

for(const div of toggle){
    div.addEventListener('click', () => {
        nav.classList.toggle('show')
    })
}

for(const link of links){
    link.addEventListener('click', () => {
        nav.classList.remove('show')
    })
}

function changeHeaderWhenScroll() {
    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
}

//Testimonials Swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination:{
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true

});

//Scroll Reveal
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social`
    ,{interval: 100}
)

//Back to top button

function backToTop(){

    const backTopButton = document.querySelector(".back-to-top")
    if(window.scrollY >= 560){
        backTopButton.classList.add('show');
    }else{
        backTopButton.classList.remove('show')
    }
}

//Scroll functions group

window.addEventListener('scroll', () => {
    backToTop()
    changeHeaderWhenScroll()
})
