let containerImg = document.querySelectorAll("#busqueda > div.galery-gifs >div > img")
let containerh1 = document.querySelectorAll("#busqueda > div.galery-gifs > div > div > div.texto_layout > h1")
let containerh2 = document.querySelectorAll("#busqueda > div.galery-gifs > div > div > div.texto_layout > h2")
let containerIconFav = document.querySelectorAll("#busqueda > div.galery-gifs > div > div > div.iconos_layout > img:nth-child(1)")
const titleBusqueda = document.getElementById('title-busqueda')
const sectionBusqueda = document.getElementById('busqueda')
const reaction = document.getElementById('reactions')
const entertainment = document.getElementById('entretainment')
const sports = document.getElementById('sports')
const stickers = document.getElementById('stickers')
const artists = document.getElementById('artists')
const btn_img_fav = document.querySelectorAll("#busqueda > div.galery-gifs > div > div > div.iconos_layout > img:nth-child(1)")
const section_trending_h2 = document.querySelectorAll("#body_inicio > div > div.trending-gif > div > div > div.texto_layout > h2")
const section_trending_h1 = document.querySelectorAll("#body_inicio > div > div.trending-gif > div > div > div.texto_layout > h1")
const sin_fav = document.getElementById('sin_fav')
let whatSearch;
let divbusqueda = document.getElementById('busqueda')


search.addEventListener('keyup', function () {
    let search = document.getElementById("search")
    let whatSearch = search.value
    api(whatSearch)

    divbusqueda.removeChild(createDiv)
    btn_VerMas.classList.remove('display-none')

    // let containerImg = document.querySelectorAll("#busqueda > div.galery-gifs >div > img")
    // if (containerImg.length > 13) {
    //     vermas(whatSearch)
    // }
})

function api(busqueda) {
    callApiSearch = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=LPXFgfOHCkhOAuWn1yNLkvG2UjUVbx3r&q=${busqueda}?`
        let response = await fetch(url)
        let data = await response.json()
        return data
    }

    sectionBusqueda.classList.remove('display-none')
    titleBusqueda.innerHTML = busqueda

    let id = []

    let info = callApiSearch();
    info.then(response => {
        for (let i = 0; i <= 12; i++) {

            containerImg[i].setAttribute("src", response.data[i].images.fixed_height.url)
            console.log(response.data[i])
            containerh1[i].innerHTML = response.data[i].username
            containerh2[i].innerHTML = response.data[i].title
            id.push(response.data[i].id)
            console.log(id)
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
            section_trending_h2[u].innerHTML = response.data[u].username
            section_trending_h1[u].innerHTML = response.data[u].title

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
    whatSearch = "Reactions"
    divbusqueda.removeChild(createDiv)
    btn_VerMas.classList.remove('display-none')

})

entertainment.addEventListener('click', function () {
    api("Entertainment")
    whatSearch = "Entertainment"
    divbusqueda.removeChild(createDiv)
    btn_VerMas.classList.remove('display-none')
}, false)

sports.addEventListener('click', function () {
    api("Sports")
    whatSearch = "Sports"
    divbusqueda.removeChild(createDiv)
    btn_VerMas.classList.remove('display-none')

})

stickers.addEventListener('click', function () {
    api("Stickers")
    whatSearch = "Stickers"
    divbusqueda.removeChild(createDiv)
    btn_VerMas.classList.remove('display-none')
})

artists.addEventListener('click', function () {
    api("Artists")
    whatSearch = "Artists"
    divbusqueda.removeChild(createDiv)
    btn_VerMas.classList.remove('display-none')
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

let idFav = []

// hay un error!!

for (let i = 0; i <= 11; i++) {

    btn_img_fav[i].addEventListener('click', function () {
        sin_fav.classList.add('display-none')

        let crearFav = document.createElement('div');
        section_favoritos.appendChild(crearFav)
        console.log(crearFav)
        let imgSrc = containerImg[i].getAttribute("src")
        crearFav.innerHTML = `<img src="${imgSrc}" ${divContenido}`

        let rutaImgActual = `assets/icon-fav.svg`
        let rutaSeleccionFav = `assets/icon-fav-active.svg`

        if (containerIconFav[i].getAttribute('src') == rutaImgActual) {
            containerIconFav[i].setAttribute('src', rutaSeleccionFav)
        }
    })
}



//Galery Vermas
const galeryNew = `
<div class="div-father-layout"> <img src="" alt="gif" class="img-layout">
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
    </div>
</div>
<div class="div-father-layout"> <img src="" alt="gif" class="img-layout">
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
    </div>
</div>
<div class="div-father-layout"> <img src="" alt="gif" class="img-layout">
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
    </div>
</div>
<div class="div-father-layout"> <img src="" alt="gif" class="img-layout">
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
    </div>
</div>
<div class="div-father-layout"> <img src="" alt="gif" class="img-layout">
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
    </div>
</div>
<div class="div-father-layout"> <img src="" alt="gif" class="img-layout">
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
    </div>
</div>
<div class="div-father-layout"> <img src="" alt="gif" class="img-layout">
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
    </div>
</div>
<div class="div-father-layout"> <img src="" alt="gif" class="img-layout">
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
    </div>
</div>
<div class="div-father-layout"> <img src="" alt="gif" class="img-layout">
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
    </div>
</div>
<div class="div-father-layout"> <img src="" alt="gif" class="img-layout">
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
    </div>
</div>
<div class="div-father-layout"> <img src="" alt="gif" class="img-layout">
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
    </div>
</div>
<div class="div-father-layout"> <img src="" alt="gif" class="img-layout">
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
    </div>
</div>
 `

function vermas(busqueda) {

    let search = document.getElementById("search")
    let whatSearch = search.value

    callApiVermas = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=LPXFgfOHCkhOAuWn1yNLkvG2UjUVbx3r&q=${whatSearch || busqueda}`
        let response = await fetch(url)
        let data = await response.json()
        return data
    }
    createDiv = document.createElement('div')
    createDiv.innerHTML = galeryNew
    createDiv.classList.add("galery-gifs")
    divbusqueda.appendChild(createDiv)

    containerImg = document.querySelectorAll("#busqueda > div.galery-gifs >div > img")
    containerh1 = document.querySelectorAll("#busqueda > div.galery-gifs > div > div > div.texto_layout > h1")
    containerh2 = document.querySelectorAll("#busqueda > div.galery-gifs > div > div > div.texto_layout > h2")
    containerIconFav = document.querySelectorAll("#busqueda > div.galery-gifs > div > div > div.iconos_layout > img:nth-child(1)")
    let info = callApiVermas();
    info.then(response => {
        for (let i = 0; i <= 24; i++) {
            console.log(response)
            containerImg[i + 12].setAttribute("src", response.data[i + 12].images.fixed_height.url)
            containerh1[i + 12].innerHTML = response.data[i + 12].username
            containerh2[i + 12].innerHTML = response.data[i + 12].title

        }
    }).catch(error => {
        console.error(error);
    })

    btn_VerMas.classList.add('display-none')

}

let btn_VerMas = document.querySelector("#section-busqueda-btn > span")

btn_VerMas.addEventListener('click', function () {
    vermas(whatSearch)
})