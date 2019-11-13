let i = 1;
// Indice con el cual se definirá la id de cada 'div.casilla'

let serpienteInicial = Math.floor(Math.random() * 1600) + 1;
// serpienteInicial es un número random que abarca desde el 1 hasta el 1600

for (columna = 0; columna < 40; columna++) {
    if (i === serpienteInicial) {
        $("#tablero").append("<div class='casilla serpiente' id='" + i + "'>");
        i++
    } else {
        $("#tablero").append("<div class='casilla' id='" + i + "'>");
        i++
    }

    for (filas = 0; filas < 39; filas++) {
        if (i === serpienteInicial) {
            $("#tablero").append("<div class='casilla serpiente' id='" + i + "'>");
            i++
        } else {
            $("#tablero").append("<div class='casilla' id='" + i + "'>");
            i++
        }
    }
};
// Se construye el tablero de 40x40 casillas
// Se define serpienteInicial como una casilla con una clase extra '.serpiente'
// Con el valor obtenido en la variable serpienteInicial definida anteriormente (número al azar entre 1 y 1600)
// Se define la casilla en la que la serpiente comenzará el juego

serpienteMovil = serpienteInicial;
// Se crea una variable serpienteMovil idéntica a serpienteInicial, sólo que esta la modificaremos a lo largo del juego

function moverDerecha() {
    flechaDerecha = setInterval(function() { 
                if (serpienteMovil % 40 != 0) {
                    $("#" + serpienteMovil).removeClass("serpiente");
                    serpienteMovil++
                    $("#" + serpienteMovil).addClass("serpiente");
                } else if (serpienteMovil % 40 === 0) {
                    $("#" + serpienteMovil).removeClass("serpiente");
                    serpienteMovil -= 39;
                    $("#" + serpienteMovil).addClass("serpiente");
                }
            }, 600)
};

function moverAbajo() {
    flechaAbajo = setInterval(function() {
        if (serpienteMovil % 40 != 0) {
            $("#" + serpienteMovil).removeClass("serpiente");
            serpienteMovil += 40;
            $("#" + serpienteMovil).addClass("serpiente");
        } else if (serpienteMovil > 1560) {
            $("#" + serpienteMovil).removeClass("serpiente");
            serpienteMovil -= 1560;
            $("#" + serpienteMovil).addClass("serpiente");
        }
    }, 600)
};

function detener(flecha) {
    clearInterval(flecha);
};

$(document).keydown(function (event) {
    console.log(event.which)
    if (event.which === 39) { 
        moverDerecha();
        // detener(flechaDerecha);
    }
    if (event.which === 40) {
        moverAbajo();
        // detener(flechaAbajo);
    }
});




