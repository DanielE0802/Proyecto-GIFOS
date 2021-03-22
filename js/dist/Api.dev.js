"use strict";

var containerImg = document.querySelectorAll("#busqueda > div.galery-gifs > img");
var titleBusqueda = document.getElementById('title-busqueda');
var sectionBusqueda = document.getElementById('busqueda');
var reaction = document.getElementById('reactions');
var entertainment = document.getElementById('entretainment');
var sports = document.getElementById('sports');
var stickers = document.getElementById('stickers');
var artists = document.getElementById('artists');
search.addEventListener('keyup', function () {
  var search = document.getElementById("search");
  var whatSearch = search.value;
  api(whatSearch);
});

function api(busqueda) {
  callApiSearch = function callApiSearch() {
    var url, response, data;
    return regeneratorRuntime.async(function callApiSearch$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "https://api.giphy.com/v1/gifs/search?api_key=LPXFgfOHCkhOAuWn1yNLkvG2UjUVbx3r&q=".concat(busqueda, "&limit=25&offset=0&rating=g&lang=es");
            _context.next = 3;
            return regeneratorRuntime.awrap(fetch(url));

          case 3:
            response = _context.sent;
            _context.next = 6;
            return regeneratorRuntime.awrap(response.json());

          case 6:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  sectionBusqueda.classList.remove('display-none');
  titleBusqueda.innerHTML = busqueda;
  var info = callApiSearch();
  info.then(function (response) {
    for (var i = 0; i <= 25; i++) {
      containerImg[i].setAttribute("src", response.data[i].images.downsized.url);
    }
  })["catch"](function (error) {
    console.error(error);
  });
}

var sectionTrendingImg = document.querySelectorAll("#body_inicio > div > div.trending-gif > img");

function trending() {
  callApiTrending = function callApiTrending() {
    var url, response, data;
    return regeneratorRuntime.async(function callApiTrending$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = "https://api.giphy.com/v1/gifs/trending?api_key=LPXFgfOHCkhOAuWn1yNLkvG2UjUVbx3r&limit=25&rating=g";
            _context2.next = 3;
            return regeneratorRuntime.awrap(fetch(url));

          case 3:
            response = _context2.sent;
            _context2.next = 6;
            return regeneratorRuntime.awrap(response.json());

          case 6:
            data = _context2.sent;
            return _context2.abrupt("return", data);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    });
  };

  var info = callApiTrending();
  info.then(function (response) {
    for (var i = 0; i <= 6; i++) {
      sectionTrendingImg[i].setAttribute("src", response.data[i].images.downsized.url);
    }
  })["catch"](function (error) {
    console.error(error);
  });
}

trending(); //Busquedas predeterminadas
//Reactions

reaction.addEventListener('click', function () {
  api("Reactions");
});
entertainment.addEventListener('click', function () {
  api("Entertainment");
}, false);
sports.addEventListener('click', function () {
  api("Sports");
});
stickers.addEventListener('click', function () {
  api("Stickers");
});
artists.addEventListener('click', function () {
  api("Artists");
});