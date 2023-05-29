
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

