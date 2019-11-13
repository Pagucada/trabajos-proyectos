let i = 0;
let serpienteInicial = Math.floor(Math.random() * 800)

for (columna = 0; columna < 40; columna++) {
    $("#tablero").append("<div class='casilla' id='" + i + "'>");
    i++
    for (filas = 0; filas < 39; filas++) {
        $("#tablero").append("<div class='casilla' id='" + i + "'>");
        i++
    }
}