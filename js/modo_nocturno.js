function call(id) {
    return document.getElementById(id)
}

let modo_nocturno = call("modo_nocturno")
let btn_modo_nocturno = call("btn_modo_nocturno")
let ultimo_modo= "";

btn_modo_nocturno.addEventListener('click', function (e) {
    modo_nocturno.classList.toggle("modo_nocturno");
    
    // cambiar texto de modo nocturno a modo diurno
    if (btn_modo_nocturno.innerHTML == "MODO NOCTURNO"){
        btn_modo_nocturno.innerHTML="MODO DIURNO";
        var ultimo_modo = localStorage.setItem('MODO_NOCTURNO', 'TRUE')
    }else{
        btn_modo_nocturno.innerHTML="MODO NOCTURNO";
        var ultimo_modo = localStorage.setItem('MODO_NOCTURNO','FALSE')
    }

    let ruta_crear_gifos= btn_crear_gifos.getAttribute('src')

    // cambiar imagenes}
    if(ruta_crear_gifos == 'assets/button-crear-gifo.svg'){
        btn_crear_gifos.setAttribute('src','assets/CTA-crar-gifo-modo-noc.svg')
    }
    else{
        btn_crear_gifos.setAttribute('src', 'assets/button-crear-gifo.svg')
    }

   

}, false)

var modo_local= localStorage.getItem('MODO_NOCTURNO')

if(modo_local == "TRUE"){
    modo_nocturno.classList.add("modo_nocturno");
    if (btn_modo_nocturno.innerHTML == "MODO NOCTURNO"){
        btn_modo_nocturno.innerHTML="MODO DIURNO";
    }else{
        btn_modo_nocturno.innerHTML="MODO NOCTURNO";
    }
    
}



console.log(ultimo_modo)