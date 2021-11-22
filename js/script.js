let cph = document.querySelector('.copenhagen-selectable')
let dk = document.querySelector('.denmark-selectable')
let europe = document.querySelector('.europe-selectable')

let mapcph = document.querySelector('#mapCPH')
let mapdk = document.querySelector('#mapDK')
let mapEurope = document.querySelector('#mapEU')

cph.addEventListener('click', () => {
    cph.classList.add('selected')
    mapcph.classList.remove('hidden')
    dk.classList.remove('selected')
    mapdk.classList.add('hidden')
    europe.classList.remove('selected')
    mapEurope.classList.add('hidden')
})

dk.addEventListener('click', () => {
    cph.classList.remove('selected')
    mapcph.classList.add('hidden')
    dk.classList.add('selected')
    mapdk.classList.remove('hidden')
    europe.classList.remove('selected')
    mapEurope.classList.add('hidden')
})

europe.addEventListener('click', () => {
    cph.classList.remove('selected')
    mapcph.classList.add('hidden')
    dk.classList.remove('selected')
    mapdk.classList.add('hidden')
    europe.classList.add('selected')
    mapEurope.classList.remove('hidden')
})

// Swiper
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true,
    spaceBetween: 100,
    grabCursor: true,
    navigation: true,
})

// Map or Playlists
// const mapSection = document.querySelector('.map')
// const playlistsSection = document.querySelector('.playlists')

// if (window.innerWidth < 1000) {
//     mapSection.classList.add('hidden')
// } else {
//     playlistsSection.classList.add('hidden')
// }
