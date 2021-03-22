"use strict";

function call(id) {
  return document.getElementById(id);
}

var modo_nocturno = call("modo_nocturno");
var btn_modo_nocturno = call("btn_modo_nocturno");
var ultimo_modo = "";
var cinta1 = call("cinta1");
var cinta2 = call("cinta2");
var ruta_crear_gifos = btn_crear_gifos.getAttribute('src');
btn_modo_nocturno.addEventListener('click', function (e) {
  modo_nocturno.classList.toggle("modo_nocturno");
  cinta1.classList.toggle("display-none");
  cinta2.classList.toggle("display-none"); // cambiar texto de modo nocturno a modo diurno

  if (btn_modo_nocturno.innerHTML == "MODO NOCTURNO") {
    btn_modo_nocturno.innerHTML = "MODO DIURNO";
    var ultimo_modo = localStorage.setItem('MODO_NOCTURNO', 'TRUE');
  } else {
    btn_modo_nocturno.innerHTML = "MODO NOCTURNO";
    var ultimo_modo = localStorage.setItem('MODO_NOCTURNO', 'FALSE');
  }

  var ruta_crear_gifos = btn_crear_gifos.getAttribute('src');
  var srclogo = logo.getAttribute('src');
  var base = base_camara.getAttribute('src'); // cambiar imagenes

  function cambio(elemento, ruta1, imagen, ruta2) {
    if (elemento == ruta1) {
      imagen.setAttribute('src', ruta2);
    } else {
      imagen.setAttribute('src', ruta1);
    }
  }

  cambio(ruta_crear_gifos, 'assets/button-crear-gifo.svg', btn_crear_gifos, 'assets/CTA-crar-gifo-modo-noc.svg');
  cambio(srclogo, 'assets/logo-mobile.svg', logo, 'assets/logo-mobile-modo-noct.svg');
  cambio(base, 'assets/element-camara.svg', base_camara, 'assets/camara-modo-noc.svg');
}, false);
var modo_local = localStorage.getItem('MODO_NOCTURNO');

if (modo_local == "TRUE") {
  modo_nocturno.classList.add("modo_nocturno");

  if (btn_modo_nocturno.innerHTML == "MODO NOCTURNO") {
    btn_modo_nocturno.innerHTML = "MODO DIURNO";
  } else {
    btn_modo_nocturno.innerHTML = "MODO NOCTURNO";
  }
}