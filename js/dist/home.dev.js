"use strict";

function call(id) {
  return document.getElementById(id);
} //Botones


var bt_fav = call("btn_fav");
var btn_crear_gifos = call("btn_crear_gifos");
var btn_mis_gifos = call("btn_mis_gifos");
var btn_home = call("logo");
var btn_comenzar = call("comenzar"); //Secciones

var section_fav = call("favoritos");
var section_fav_btn = call("section_fav_btn");
var section_mis_gifos = call("mis-gifos");
var section_mis_gifos_btn = call("section_mis_gifos_btn");
var body_inicio = call("body_inicio");
var section_home = call("home");
var section_crear_gifos = call("crearGifos");
var section_main = call("section_main"); //Sección crear GIFO

btn_crear_gifos.addEventListener('click', function () {
  body_inicio.classList.toggle("display-none");
  section_crear_gifos.classList.toggle("display-none");
}, false); //Sección favoritos

bt_fav.addEventListener('click', function (e) {
  section_fav.classList.remove('display-none');
  section_fav.classList.add('padding');
  section_fav_btn.classList.remove('display-none');
  sectionBusqueda.classList.add('display-none');
  section_mis_gifos.classList.add("display-none");
  section_mis_gifos_btn.classList.add('display-none');
  section_main.classList.add("display-none");

  if (body_inicio.classList.value == "display-none") {
    section_crear_gifos.classList.add("display-none");
    body_inicio.classList.remove("display-none");
  }
}, false); //Sección mis GIFOS

btn_mis_gifos.addEventListener('click', function (e) {
  section_mis_gifos.classList.remove('display-none');
  section_mis_gifos.classList.add("padding");
  section_mis_gifos_btn.classList.remove('display-none');
  section_fav.classList.add("display-none");
  section_fav_btn.classList.add('display-none');
  section_main.classList.add("display-none");
  sectionBusqueda.classList.add('display-none');

  if (body_inicio.classList.value == "display-none") {
    section_crear_gifos.classList.add("display-none");
    body_inicio.classList.remove("display-none");
  }
}, false);
btn_home.addEventListener('click', function () {
  section_main.classList.remove('display-none');
  section_fav.classList.add('display-none');
  section_fav_btn.classList.add('display-none');
  section_mis_gifos.classList.add("display-none");
  section_mis_gifos_btn.classList.add('display-none');

  if (body_inicio.classList.value == "display-none") {
    section_crear_gifos.classList.add("display-none");
    body_inicio.classList.remove("display-none");
  }
});
btn_comenzar.addEventListener('click', function () {
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
  }).then(function (stream) {
    console.log(stream);
    var video = document.getElementById("video");
    video.srcObject = stream;
  })["catch"](function (err) {
    return console.log(err);
  });
});