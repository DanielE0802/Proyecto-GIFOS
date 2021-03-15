function call(id) {
    return document.getElementById(id)
}

let modo_nocturno = call("modo_nocturno")
let btn_modo_nocturno = call("btn_modo_nocturno")


btn_modo_nocturno.addEventListener('click', function (e) {
    modo_nocturno.classList.toggle("modo_nocturno");
    
    // cambiar texto de modo nocturno a modo diurno
    if (btn_modo_nocturno.innerHTML == "MODO NOCTURNO"){
        btn_modo_nocturno.innerHTML="MODO DIURNO";
    }else{
        btn_modo_nocturno.innerHTML="MODO NOCTURNO";
    }

    // cambiar imagenes}

}, false)
