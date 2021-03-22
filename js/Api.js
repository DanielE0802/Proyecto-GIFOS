const containerImg = document.querySelectorAll("#busqueda > div.galery-gifs >div > img")
const titleBusqueda = document.getElementById('title-busqueda')
const sectionBusqueda = document.getElementById('busqueda')
const reaction = document.getElementById('reactions')
const entertainment = document.getElementById('entretainment')
const sports = document.getElementById('sports')
const stickers = document.getElementById('stickers')
const artists = document.getElementById('artists')

search.addEventListener('keyup', function () {
    let search = document.getElementById("search")
    let whatSearch = search.value

    api(whatSearch)
})

function api(busqueda) {
    callApiSearch = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=LPXFgfOHCkhOAuWn1yNLkvG2UjUVbx3r&q=${busqueda}&limit=25&offset=0&rating=g&lang=es`
        let response = await fetch(url)
        let data = await response.json()
        return data
    }

    sectionBusqueda.classList.remove('display-none')
    titleBusqueda.innerHTML = busqueda

    let info = callApiSearch();
    info.then(response => {
        for (let i = 0; i <= 25; i++) {
            containerImg[i].setAttribute("src", response.data[i].images.fixed_height.url)
        }

    }).catch(error => {
        console.error(error);
    })
}


let sectionTrendingImg = document.querySelectorAll("#body_inicio > div > div.trending-gif > img")

function trending() {

    callApiTrending = async () => {
        const url = "https://api.giphy.com/v1/gifs/trending?api_key=LPXFgfOHCkhOAuWn1yNLkvG2UjUVbx3r&limit=25&rating=g"
        let response = await fetch(url)
        let data = await response.json()
        return data
    }

    let info = callApiTrending();
    info.then(response => {
        for (let i = 0; i <= 6; i++) {
            sectionTrendingImg[i].setAttribute("src", response.data[i].images.fixed_height.url)
        }

    }).catch(error => {
        console.error(error);
    })

}

trending()

//Busquedas predeterminadas

//Reactions
reaction.addEventListener('click', function () {
    api("Reactions")
})

entertainment.addEventListener('click', function () {
    api("Entertainment")
}, false)

sports.addEventListener('click', function () {
    api("Sports")
})

stickers.addEventListener('click', function () {
    api("Stickers")
})

artists.addEventListener('click', function () {
    api("Artists")
})


for (let i = 0; i < containerImg.length; i++) {

    containerImg[i].addEventListener('mouseenter', function () {
        let div = document.createElement('span')
        div.classList.add("mouseEncima")
        containerImg[i].after(div)
    })
}