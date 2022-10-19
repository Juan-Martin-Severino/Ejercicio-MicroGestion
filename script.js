let frase;
let palabras;
let fraseTransformada = new String();

do {
  frase = prompt("Ingrese frase a transformar");
} while (frase == "");

palabras = frase.split(" ");
fraseTransformada =
  transformarFrase(palabras).trim() + frase.trim().substring(1);
alert("Tu frase transformada es: " + fraseTransformada);

function transformarFrase(palabras) {
  palabras.forEach((palabra) => {
    if (palabra != "") {
      primerLetra = palabra.charAt(0);
      palabra = palabra.substring(1);
      segundaLetra = palabra.charAt(0).toUpperCase();
      palabra = palabra.substring(1);
      palabraTransformada = segundaLetra + palabra + primerLetra + "ay";
      fraseTransformada = fraseTransformada.concat(palabraTransformada, " ");
    }
  });

  return fraseTransformada;
}
