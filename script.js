let frase;
let palabras;
let fraseTransformada = new String();

do {
  frase = prompt("Ingrese frase a transformar");
} while (frase == "");

palabras = frase.split(" ");
fraseTransformada = transformarFrase(palabras);
console.log(fraseTransformada);
alert("Tu frase transformada es: " + fraseTransformada);

function transformarFrase(palabras) {
  palabras.forEach((palabra) => {
    if (palabra != "") {
      primerLetra = palabra.slice(0, 1);
      palabra = palabra.slice(1, parseInt(palabra.length));
      palabraTransformada = palabra + primerLetra + "ay ";
      fraseTransformada = fraseTransformada.concat(palabraTransformada);
    }
  });

  return fraseTransformada;
}
