function call(id) {
  return document.getElementById(id)
}


//Botones
let bt_fav = call("btn_fav")
let btn_crear_gifos = call("btn_crear_gifos")
let btn_mis_gifos = call("btn_mis_gifos")
let btn_home = call("logo")
let btn_comenzar = call("comenzar")

//Secciones
let section_fav = call("favoritos")
let section_fav_btn = call("section_fav_btn")

let section_mis_gifos = call("mis-gifos")
let section_galery_mis_gifos = document.querySelector("#mis-gifos > div")
let section_mis_gifos_btn = call("section_mis_gifos_btn")

let body_inicio = call("body_inicio")
let section_home = call("home")
let section_crear_gifos = call("crearGifos")
let section_main = call("section_main")

let misGifos = document.querySelectorAll("#mis-gifos > div > img")
let icon_max_gif_fav = document.querySelectorAll("#galery-fav > div> div > div.iconos_layout > img:nth-child(2)")
let icon_max_gif_my_gif = document.querySelectorAll("#mis-gifos > div > div> div > div.iconos_layout > img:nth-child(2)")
let download_my_fav_gif = document.querySelectorAll("#galery-fav > div > div > div.iconos_layout > img.btn_descarga")
let download_my_gif_section = document.querySelectorAll("#mis-gifos > div > div > div > div.iconos_layout > img.btn_descarga")
//Sección crear GIFO

btn_crear_gifos.addEventListener('click', function () {
  body_inicio.classList.toggle("display-none")
  section_crear_gifos.classList.toggle("display-none")
  icon_delte_my_gif = document.querySelectorAll("#mis-gifos > div > div > div > div.iconos_layout > img:nth-child(1)")
}, false)


//Sección favoritos

bt_fav.addEventListener('click', function () {
  let notFound = document.getElementById("notFound")
  notFound.classList.add("display-none")
  section_fav.classList.remove('display-none');
  section_fav.classList.add('padding');
  section_fav_btn.classList.remove('display-none');
  sectionBusqueda.classList.add('display-none')
  section_mis_gifos.classList.add("display-none")
  section_mis_gifos_btn.classList.add('display-none');
  section_main.classList.add("display-none")
  icon_delete_gif = document.querySelectorAll("#galery-fav > div> div > div.iconos_layout > img:nth-child(1)")
  icon_delte_my_gif = document.querySelectorAll("#mis-gifos > div > div > div > div.iconos_layout > img:nth-child(1)")
  icon_max_gif_fav = document.querySelectorAll("#galery-fav > div> div > div.iconos_layout > img:nth-child(2)")
  download_my_fav_gif = document.querySelectorAll("#galery-fav > div > div > div.iconos_layout > img.btn_descarga")
  deleteGif()
  downloadMyFavGif()
  maxGifFav()
  downloadFromGifMax()

  if (idFav.length == 0) {
    sin_fav.classList.remove('display-none')
  }

  if (body_inicio.classList.value == "display-none") {
    section_crear_gifos.classList.add("display-none")
    body_inicio.classList.remove("display-none")
  }

}, false)


//Sección mis GIFOS

btn_mis_gifos.addEventListener('click', function () {

  let galeryGifMygif = document.querySelector("#mis-gifos > div.galery-gifs")
  console.log( galeryGifMygif.childElementCount ) 
  let sin_gif = document.getElementById("sin_gif")

  if(galeryGifMygif.childElementCount > 0){
    sin_gif.classList.add("display-none")
  }else{
    sin_gif.classList.remove("display-none")
  }

  let cambiarUrl = document.querySelector("#sin_gif > img")
  cambiarUrl.setAttribute("src", "assets/icon-mis-gifos-sin-contenido.svg")
  
  let notFound = document.getElementById("notFound")
  notFound.classList.add("display-none")
  section_mis_gifos.classList.remove('display-none');
  section_mis_gifos.classList.add("padding")
  section_mis_gifos_btn.classList.remove('display-none');

  section_fav.classList.add("display-none")
  section_fav_btn.classList.add('display-none');
  section_main.classList.add("display-none")
  icon_delte_my_gif = document.querySelectorAll("#mis-gifos > div > div > div > div.iconos_layout > img:nth-child(1)")
  icon_max_gif_my_gif = document.querySelectorAll("#mis-gifos > div > div> div > div.iconos_layout > img:nth-child(2)")
  download_my_gif_section = document.querySelectorAll("#mis-gifos > div > div > div > div.iconos_layout > img.btn_descarga")
  deleteMyGif()
  maxGifMyGif()
  downloadMyGifSection()
  sectionBusqueda.classList.add('display-none')

  if (body_inicio.classList.value == "display-none") {
    section_crear_gifos.classList.add("display-none")
    body_inicio.classList.remove("display-none")
  }

}, false)

btn_home.addEventListener('click', function () {
  section_main.classList.remove('display-none')

  section_fav.classList.add('display-none')
  section_fav_btn.classList.add('display-none');

  section_mis_gifos.classList.add("display-none")
  section_mis_gifos_btn.classList.add('display-none');

  if (body_inicio.classList.value == "display-none") {

    section_crear_gifos.classList.add("display-none")
    body_inicio.classList.remove("display-none")

  }
})

if (localStorage.getItem('My_gifos') !== null) {
  idMyGifLocal = localStorage.getItem('My_gifos')
  idMyGifLocal = idMyGifLocal.split(',')
  idMyGifLocal.map(Element => idMyGifos.push(Element))
}

idMyGifos.map(Element => searchMyGif(Element))

function searchMyGif(id) {
  let info = searchId(id)
  info.then(response => {
    sin_fav.classList.add('display-none')
    let crearFav = document.createElement('div');
    crearFav.classList.add('div-father-layout')
    let galeryGifMygif = document.querySelector("#mis-gifos > div.galery-gifs")
    galeryGifMygif.appendChild(crearFav)
    crearFav.innerHTML = `${divContenido(response.data.images.fixed_height.url, response.data.id ,response.data.username,"My GIF")}`

  })
  info.catch(error => console.error(error))
}

//Crear gifo
//Variables

let form = new FormData();
let gifID;
const timer = document.getElementById('timer');
const watch = timer
let milliseconds = 0;
let chronometer;
let primerPaso = document.getElementById('primer_paso')
let segundoPaso = document.getElementById('segundo_paso')
let btn_grabar = document.getElementById('grabar');
let grabacion;
let paso1 = document.getElementById('paso1')
let paso2 = document.getElementById('paso2')
let paso3 = document.getElementById('paso3')
let video = document.getElementById("video")
let subiendoGifo = document.getElementById('subiendoGifo')
let gifo_container = document.getElementById('gifo-container')

//Contador- iniciar
function comenzarCronometro() {
  clearInterval(chronometer);
  chronometer = setInterval(() => {
    milliseconds += 10;

    const dateTimer = new Date(milliseconds);

    watch.innerHTML = `${`0${dateTimer.getUTCMinutes()}`.slice(-2)}:${`0${dateTimer.getUTCSeconds()}`.slice(
        -2
      )}:${`0${dateTimer.getUTCMilliseconds()}`.slice(-3, -1)}`;
  }, 10);
}

//Contador- Pausar
function pausarCronometro() {
  clearInterval(chronometer);
}


//Funcion para mostrar camara
function mostrarCamara() {
  navigator.mediaDevices.getUserMedia({
    video: {
      width: {
        min: 1024,
        ideal: 1280,
        max: 1920
      },
      height: {
        min: 576,
        ideal: 720,
        max: 1080
      }
    }
  }).then((stream) => {
    grabacion = RecordRTC(stream, {
      type: "gif",
      frameRate: 1,
      quality: 10,
      width: 360,
      hidden: 240,
    });

    paso1.classList.add('paso-activo')
    paso2.classList.remove('paso-activo')
    paso3.classList.remove('paso-activo')
    btn_grabar.innerHTML = "<h1>Grabar</h1>"
    video.srcObject = stream

  }).catch((err) =>{
    console.error(err)
    alert("No hemos podido acceder a tu camara, recuerda aceptar los permisos que deben aparecer en la parte superior izquierda para poder grabar tu gifo ;)")
  } )
  btn_comenzar.classList.add('display-none')
  primerPaso.classList.add('display-none')
  segundoPaso.classList.remove('display-none')
  btn_grabar.classList.remove('display-none')
  btn_comenzar.innerHTML = "Grabar"
  btn_grabar.removeEventListener("click", btn_subir_gifo);
  timer.textContent = "00:00:00"


}
const Btn_Comenzar_a_grabar = () => {
  mostrarCamara((stream) => {
    grabacion = RecordRTC(stream, {
      type: "gif",
      frameRate: 1,
      quality: 10,
      width: 360,
      hidden: 240,
      onGifRecordingStarted() {},
    });
  });

};

//Comenzar a grabar
function ComenzarAGrabar() {
  watch.textContent = "00:00:00";
  comenzarCronometro();
  btn_grabar.innerHTML = "<h1>Finalizar</h1>";
  grabacion.startRecording();
  btn_grabar.removeEventListener("click", ComenzarAGrabar);
  btn_grabar.addEventListener("click", btn_finalizar_gifo);
  paso1.classList.remove('paso-activo')
  paso2.classList.add('paso-activo')
}


//Finaliza la grabacion
const btn_finalizar_gifo = () => {
  btn_grabar.innerHTML = "<h1>Subir gifo</h1>";
  watch.textContent = "Repetir captura";
  watch.addEventListener('click', function () {
    btn_grabar.addEventListener('click', ComenzarAGrabar)
    milliseconds = 0
    chronometer = 0
    form = new FormData();
    mostrarCamara();
  })
  pausarCronometro();
  // eslint-disable-next-line no-use-before-define
  btn_grabar.removeEventListener("click", btn_finalizar_gifo);
  btn_grabar.addEventListener("click", btn_subir_gifo);

  grabacion.stopRecording(() => {
    form.append("file", grabacion.getBlob(), "myGif.gif");

  });
};


//sube el gifo invocando una funcion para subirlo.
const btn_subir_gifo = async () => {
  btn_grabar.removeEventListener("click", btn_subir_gifo);
  paso2.classList.remove('paso-activo')
  paso3.classList.add('paso-activo')
  subiendoGifo.classList.remove('display-none')
  await subirDatos();
  MiGifo();
  //Mandar a la seccion mis gifos 

};

let repetir = false

//Hace el post
async function subirDatos() {
  const res = await fetch("https://upload.giphy.com/v1/gifs?api_key=LPXFgfOHCkhOAuWn1yNLkvG2UjUVbx3r", {
    method: "POST",
    body: form,
    redirect: "follow"
  });
  const json = await res.json();
  gifID = json.data.id;

  subiendoGifo.lastElementChild.innerText = "GIFO subido con éxito"
  subiendoGifo.children[1].setAttribute("src", "/assets/check.svg")

}


//trae la url
function traerMiGifo(myURL) {
  video.classList.add('display-none')
  segundoPaso.classList.add('display-none')

  let div = document.createElement('div')
  let img = document.createElement('img')

  div.appendChild(img)
  div.classList.add('preview_gifo')
  section_crear_gifos.appendChild(div)
  img.setAttribute('src', myURL)
  btn_grabar.classList.add('display-none')
}

function mandarAMisGifos(myURL) {

  for (let i = 0; i <= 1; i++) {
    misGifos[i].setAttribute('src', myURL)
  }

}



async function MiGifo() {
  const resp = await fetch(`https://api.giphy.com/v1/gifs/${gifID}?api_key=hHX3bZ1xLpCNgZZtcHmUuvAlBCvDuBtD`);
  const myJson = await resp.json();
  myURL = myJson.data.images.original.url;

  let galeryGifMygif = document.querySelector("#mis-gifos > div.galery-gifs")

  idMyGifos.push(myJson.data.id)
  var fav_local = localStorage.setItem('My_gifos', idMyGifos)
  let crearFav = document.createElement('div');
  crearFav.classList.add('div-father-layout')
  galeryGifMygif.appendChild(crearFav)
  crearFav.innerHTML = `${divContenido(myJson.data.images.fixed_height.url, myJson.data.id ,myJson.data.username,"My GIF")}`
  let sin_gif = document.getElementById("sin_gif")

  if (sin_gif.classList.contains === "display-none"){
  }else{
    sin_gif.classList.add("display-none")
  }

    setTimeout(function () {
      traerMiGifo(myURL)
      mandarAMisGifos(myURL)
      watch.textContent = "Grabar nuevo gifo"
    }, 5000)
}


btn_comenzar.addEventListener('click', Btn_Comenzar_a_grabar)

btn_grabar.addEventListener('click', ComenzarAGrabar)