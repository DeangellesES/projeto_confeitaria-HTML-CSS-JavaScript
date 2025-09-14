// RETIRANDO O TOPO
let cabecalhoSuperior = document.querySelector(".cabecalho__superior")
let cabecalho = document.querySelector(".cabecalho")

window.onscroll = function () {
    cabecalho.classList.add('arrumar')
    cabecalhoSuperior.classList.add('alterar')
    cabecalhoSuperior.classList.remove('esconder')
}


// setInterval(setaSubir, 1500)

// let aparecerTopo = document.querySelector('.cabecalho__superior')

// function setaSubir() {
//     aparecerTopo.classList.remove('esconder')
//     aparecerTopo.classList.add('aparecer')
//     cabecalhoSuperior.classList.remove('alterar')
//     cabecalho.classList.remove('arrumar')
// }

// window.onscroll = () => {
//     setaCima.classList.remove('aparecer')
// }

// SWIPER PARTE DE CIMA
var swiper1  = new Swiper(".home-slider", {

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    grapCursor: true,
    loop: true,
    centeredSlides: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

})

// SWIPER PARTE DEPOIMENTOS

var swiper2  = new Swiper(".secao__depoimentos", {

    slidesPerView: 1,
    spaceBetween: 0, 
    loop: true,
    autoplay: {
        delay: 2500,   
    },
    
    pagination: {
        el: '.swiper-pagination2',
        clickable: true
    },

    navigation: {
        nextEl: '.swiper-button-next-um',
        prevEl: '.swiper-button-prev-um'
    },

})