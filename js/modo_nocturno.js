function call(id) {
    return document.getElementById(id)
}

let modo_nocturno = call("modo_nocturno")
let btn_modo_nocturno = call("btn_modo_nocturno")
let cinta1 = call("cinta1")
let cinta2 = call("cinta2")

let ruta_crear_gifos= btn_crear_gifos.getAttribute('src')

btn_modo_nocturno.addEventListener('click', function (e) {
    modo_nocturno.classList.toggle("modo_nocturno");
    cinta1.classList.toggle("display-none")
    cinta2.classList.toggle("display-none")
    // cambiar texto de modo nocturno a modo diurno
    if (btn_modo_nocturno.innerHTML == "MODO NOCTURNO"){
        btn_modo_nocturno.innerHTML="MODO DIURNO";
    }else{
        btn_modo_nocturno.innerHTML="MODO NOCTURNO";
    }
    
    let ruta_crear_gifos= btn_crear_gifos.getAttribute('src')
    let logoo=logo.getAttribute('src')
    let base = base_camara.getAttribute('src')
    // cambiar imagenes
    function cambio(elemento, ruta1, imagen, ruta2){
        if(elemento == ruta1){
            imagen.setAttribute('src', ruta2)
        }
        else{
            imagen.setAttribute('src', ruta1)
        }
    }
    cambio(ruta_crear_gifos, 'assets/button-crear-gifo.svg', btn_crear_gifos, 'assets/CTA-crar-gifo-modo-noc.svg');
    cambio(logoo, 'assets/logo-mobile.svg', logo, 'assets/logo-mobile-modo-noct.svg');
    cambio(base, 'assets/element-camara.svg', base_camara, 'assets/camara-modo-noc.svg');

   
}, false)
