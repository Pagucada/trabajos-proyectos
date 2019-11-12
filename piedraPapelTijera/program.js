
let puntuacionUsuario = $("#user-score");
let puntuacionComputadora = $("#computer-score");
let resultado = $("#resultado");
let piedra = $("#r");
let papel = $("#p");
let tijeras = $("#s");
let eleccionComputadora = ["#r", "#p", "#s"];

valorPuntuacionComputadora = 0;
valorPuntuacionUsuario = 0;

puntuacionComputadora.text(valorPuntuacionComputadora);
puntuacionUsuario.text(valorPuntuacionUsuario);

function cerebroComputadora() {
  let eleccion = Math.floor(Math.random() * 3 );
  let eleccionEjecutada = eleccionComputadora[eleccion];
  return eleccionEjecutada;
};

piedra.on("click", function() {
  // console.log("Funciona");
  if (cerebroComputadora() === "#r") {
    // Draw
    resultado.text("Empataste xD...")
    cerebroComputadora();
  } else if (cerebroComputadora() === "#p") {

    // Lose
    valorPuntuacionComputadora++;
    resultado.text("Perdiste xD...")
    $("#r").css("border-color", "#f32828")
    setTimeout(function() {
      $("#r").css("border-color", "#ffffff")
    }, 300); 
    puntuacionComputadora.text(valorPuntuacionComputadora);
    cerebroComputadora();


  } else {
    // Win 
    $("#r").css("border-color", "#a4fa2c")
    setTimeout(function() {
      $("#r").css("border-color", "#ffffff")
    }, 300); 
    resultado.text("Ganaste wey xD...");
    valorPuntuacionUsuario++;
    puntuacionUsuario.text(valorPuntuacionUsuario);
    cerebroComputadora();
  }
});

papel.on("click", function() {
  // console.log("Funciona")
  if(cerebroComputadora() === "#r") {
    // Win

    $("#p").css("border-color", "#a4fa2c")
    setTimeout(function() {
      $("#p").css("border-color", "#ffffff")
    }, 300); 
    resultado.text("Ganaste wey xD...");
    valorPuntuacionUsuario++;
    puntuacionUsuario.text(valorPuntuacionUsuario);

    cerebroComputadora();
  } else if (cerebroComputadora() === "#p") {
    // Draw
    resultado.text("Empataste xD...")
    cerebroComputadora();
  } else {
    // Lose 

    valorPuntuacionComputadora++;
    resultado.text("Perdiste xD...")
    $("#p").css("border-color", "#f32828")
    setTimeout(function() {
      $("#p").css("border-color", "#ffffff")
    }, 300); 
    puntuacionComputadora.text(valorPuntuacionComputadora);

    cerebroComputadora();
  }
});

tijeras.on("click", function() {
  // console.log("Funciona");
  if(cerebroComputadora() === "#r") {
    // Lose

    valorPuntuacionComputadora++;
    resultado.text("Perdiste xD...")
    $("#s").css("border-color", "#f32828")
    setTimeout(function() {
      $("#s").css("border-color", "#ffffff")
    }, 300);
    puntuacionComputadora.text(valorPuntuacionComputadora);
    cerebroComputadora();
  } else if (cerebroComputadora() === "#p") {
    // Win

    $("#s").css("border-color", "#a4fa2c")
    setTimeout(function() {
      $("#s").css("border-color", "#ffffff")
    }, 300); 
    resultado.text("Ganaste wey xD...");
    valorPuntuacionUsuario++;
    puntuacionUsuario.text(valorPuntuacionUsuario);

    cerebroComputadora();
  } else {
    // Draw
    resultado.text("Empataste xD...") 
    cerebroComputadora();
  }
});