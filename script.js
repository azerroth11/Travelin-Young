let dk = document.querySelector('.denmark-selectable')
let europe = document.querySelector('.europe-selectable')

let mapdk = document.querySelector('#mapDK')
let mapEurope = document.querySelector('#mapEurope')

dk.addEventListener('click', e => {
    dk.classList.toggle('selected')
    mapdk.classList.toggle('hidden')
    europe.classList.toggle('selected')
    mapEurope.classList.toggle('hidden')
})

europe.addEventListener('click', e => {
    dk.classList.toggle('selected')
    mapdk.classList.toggle('hidden')
    europe.classList.toggle('selected')
    mapEurope.classList.toggle('hidden')
})
