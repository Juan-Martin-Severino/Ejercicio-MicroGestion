let palabra;
let primerletra;
let palabratransformada;

do {
  palabra = prompt("Ingrese palabra a transformar");
} while (palabra == "");

primerletra = palabra.slice(0, 1);
palabra = palabra.slice(1, parseInt(palabra.length));
palabratransformada = palabra + primerletra + "ay";

console.log(palabratransformada);
alert("Tu palabra transformada es: " + palabratransformada);
