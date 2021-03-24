const containerImg = document.querySelectorAll("#busqueda > div.galery-gifs >div > img")
const containerh1 = document.querySelectorAll("#busqueda > div.galery-gifs > div > div > div.texto_layout > h1")
const containerh2 = document.querySelectorAll("#busqueda > div.galery-gifs > div > div > div.texto_layout > h2")
const containerIconFav = document.querySelectorAll("#busqueda > div.galery-gifs > div > div > div.iconos_layout > img:nth-child(1)")
const titleBusqueda = document.getElementById('title-busqueda')
const sectionBusqueda = document.getElementById('busqueda')
const reaction = document.getElementById('reactions')
const entertainment = document.getElementById('entretainment')
const sports = document.getElementById('sports')
const stickers = document.getElementById('stickers')
const artists = document.getElementById('artists')
const btn_img_fav = document.querySelectorAll("#busqueda > div.galery-gifs > div > div > div.iconos_layout > img:nth-child(1)")


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
        for (var i = 0; i <= 12; i++) {
            containerImg[i].setAttribute("src", response.data[i].images.fixed_height.url)
            console.log(response.data[i])
            containerh1[i].innerHTML = response.data[i].username
            containerh2[i].innerHTML = response.data[i].title

        }

    }).catch(error => {
        console.error(error);
    })

 
}

let sectionTrendingImg = document.querySelectorAll("#body_inicio > div > div.trending-gif > div > img")

function trending() {

    callApiTrending = async () => {
        const url = "https://api.giphy.com/v1/gifs/trending?api_key=LPXFgfOHCkhOAuWn1yNLkvG2UjUVbx3r&limit=25&rating=g"
        let response = await fetch(url)
        let data = await response.json()
        return data
    }

    let info = callApiTrending();
    info.then(response => {
        for (let u = 1; u <= 6; u++) {
            sectionTrendingImg[u].setAttribute("src", response.data[u].images.fixed_height.url)
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

//fav section
let divContenido = `alt="gif">
<div class="layout">
    <div class="iconos_layout">
        <img src="assets/icon-fav.svg" alt="">
        <img src="assets/icon-max-normal.svg" alt="">
        <img class="btn_descarga" src="assets/icon-download.svg" alt="">
    </div>
    <div class="texto_layout">
        <h1>titulo</h1>
        <h2>subtitulo</h2>
    </div>
</div>` 

let section_favoritos = document.getElementById('galery-fav')


// hay un error!!

for (let i = 0; i <= 25; i++) {
  
    btn_img_fav[i].addEventListener('click', function () {
        let crearFav = document.createElement('div');
        section_favoritos.appendChild(crearFav)
        console.log(crearFav)
        let imgSrc = containerImg[i].getAttribute("src")
        crearFav.innerHTML = `<img src="${imgSrc}" ${divContenido}`
    
        let rutaImgActual = `assets/icon-fav.svg` 
        let rutaSeleccionFav = `assets/icon-fav-active.svg`
    
        if(containerIconFav[i].getAttribute('src')  == rutaImgActual){
            containerIconFav[i].setAttribute('src', rutaSeleccionFav)
        }
        else{
            console.log("no")
        }
    })

}


