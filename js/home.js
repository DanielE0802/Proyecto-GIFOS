function call (id){
    return document.getElementById(id)
}

//Botones
let bt_fav = call("btn_fav")
let btn_crear_gifos= call("btn_crear_gifos")
let btn_mis_gifos = call("btn_mis_gifos")
let btn_home = call("logo")
let btn_comenzar= call("comenzar")

//Secciones
let section_fav= call("favoritos")
let section_fav_btn = call("section_fav_btn")

let section_mis_gifos= call("mis-gifos")
let section_mis_gifos_btn = call("section_mis_gifos_btn")

let body_inicio=call("body_inicio")
let section_home = call("home")
let section_crear_gifos=call("crearGifos")
let section_main=call("section_main")


//Sección crear GIFO

btn_crear_gifos.addEventListener('click', function(){
    body_inicio.classList.toggle("display-none")
    section_crear_gifos.classList.toggle("display-none")
},false)


//Sección favoritos

bt_fav.addEventListener('click', function(e){
    section_fav.classList.remove('display-none'); 
    section_fav.classList.add('padding'); 
    section_fav_btn.classList.remove('display-none');

    section_mis_gifos.classList.add("display-none")
    section_mis_gifos_btn.classList.add('display-none');
    section_main.classList.add("display-none")

    if(body_inicio.classList.value == "display-none"){
        section_crear_gifos.classList.add("display-none")
        body_inicio.classList.remove("display-none")
    }

},false)


//Sección mis GIFOS

btn_mis_gifos.addEventListener('click', function(e){
    section_mis_gifos.classList.remove('display-none');
    section_mis_gifos.classList.add("padding")
    section_mis_gifos_btn.classList.remove('display-none');

    section_fav.classList.add("display-none")
    section_fav_btn.classList.add('display-none');
    section_main.classList.add("display-none")

    if(body_inicio.classList.value == "display-none"){
        section_crear_gifos.classList.add("display-none")
        body_inicio.classList.remove("display-none")
    }

},false)

btn_home.addEventListener('click', function(){
    section_main.classList.remove('display-none')

    section_fav.classList.add('display-none')
    section_fav_btn.classList.add('display-none');
    
    section_mis_gifos.classList.add("display-none")
    section_mis_gifos_btn.classList.add('display-none');

    if(body_inicio.classList.value == "display-none"){

        section_crear_gifos.classList.add("display-none")
        body_inicio.classList.remove("display-none")
    
    }
})

btn_comenzar.addEventListener('click', function(){
    navigator.mediaDevices.getUserMedia({
        video:true
    }).then((stream)=>{
        console.log(stream)
        let video= document.getElementById("video")
        video.srcObject = stream
    }).catch((err)=>console.log(err))
})



