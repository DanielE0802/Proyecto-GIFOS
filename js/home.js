function call (id){
    return document.getElementById(id)
}

let bt_fav = call("btn_fav")
let fav= call("favoritos")
let section_fav_btn = call("section_fav_btn")
let bt_mis_gifos = call("btn_mis_gifos")
let mis_gif= call("mis-gifos")
let section_mis_gifos_btn = call("section_mis_gifos_btn")
let btn_crear_gifos= call("btn_crear_gifos")
let seccion_crear_gifos=call("crearGifos")
let body_inicio=call("body_inicio")
let logoNav = call(logo)

//Sección crear GIFO

btn_crear_gifos.addEventListener('click', function(){
    body_inicio.classList.toggle("display-none")
    seccion_crear_gifos.classList.toggle("display-none")
},false)


//Sección favoritos

bt_fav.addEventListener('click', function(e){
    fav.classList.remove('display-none'); 
    section_fav_btn.classList.remove('display-none');
    mis_gif.classList.add("display-none")
    section_mis_gifos_btn.classList.add('display-none');

    if(body_inicio.classList.value == "display-none"){
        seccion_crear_gifos.classList.add("display-none")
        body_inicio.classList.remove("display-none")
    }

},false)


//Sección mis GIFOS

bt_mis_gifos.addEventListener('click', function(e){
    mis_gif.classList.remove('display-none');
    section_mis_gifos_btn.classList.remove('display-none');
    fav.classList.add("display-none")
    section_fav_btn.classList.add('display-none');

    if(body_inicio.classList.value == "display-none"){
        seccion_crear_gifos.classList.add("display-none")
        body_inicio.classList.remove("display-none")
    }

},false)

