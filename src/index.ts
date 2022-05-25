let numero = Number(prompt("Ingrese un número"));
let contador = 0;

while (numero !== 0) {
  if (numero % 2 === 0) {
    console.log("El número es par");
    break;
  } else {
    console.log("El número es impar");
  }
}