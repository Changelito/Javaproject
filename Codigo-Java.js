
function encriptar (){
  let texto = document.getElementById("texto-area").value;
  let TituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("personaje")
  let textoEncriptado = texto
            .replace(/e/gi, "enter" )
             .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober" )
             .replace(/u/gi, "ufat");
      if (texto.length != 0){
        document.getElementById("texto-area").value = textoEncriptado;
        TituloMensaje.textContent = "texto encriptado con exito";
      parrafo.textContent = "";
      document.getElementById("personaje").src = ("Imagenes/Encriptado.jpg");
       } else {
              document.getElementById.src = ("Imagenes/Muñeco.png");
              alert ("debes introducir un texto");
            }
             

}


function desencriptar (){
  let texto = document.getElementById("texto-area").value;
  let TituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("personaje");
  let textoEncriptado = texto 
  .replace(/enter/gi, "e" )
  .replace(/imes/gi, "i")
  .replace(/ai/gi, "a")
  .replace(/ober/gi, "o" )
  .replace(/ufat/gi, "u");

  if (texto.length != 0){
         let texto = document.getElementById("texto-area").value = textoEncriptado;
         TituloMensaje.textContent = "Texto desencriptado con exito"; 
         parrafo.textContent = "";
         document.getElementById("personaje").src = "Imagenes/desencriptado.jpg";

  } else {
    document.getElementById("personaje").src = "Imagenes/Muñeco.png";
           alert ("debes introducir un texto");
           TituloMensaje.textContent = "Ningun texto fue encontrado " ;
           parrafo.textContent = "Ingresa texto que desees encriptar o desencriptar";
  }

}
function transferirTexto() {
  var textoEntrada = document.getElementById("texto-area").value;
  document.getElementById("texto-encriptado").value = textoEntrada;
  document.getElementById("texto-area").value = "";
}
