let dimensionArreglo: number = Number(
  prompt("Ingrese la cantidad de celdas deseadas")
);
let indice: number;
let arrayAños: number[] = new Array(dimensionArreglo);
let arrayAltura: number[] = new Array(dimensionArreglo);
let arrayNombres: string[] = new Array(dimensionArreglo);

function cargarVectorAños(arrayAños: number[], dimensionArreglo: number) {
  for (indice = 0; indice < dimensionArreglo; indice++) {
    arrayAños[indice] = Number(
      prompt("Ingrese el año deseado en la posición " + (indice + 1))
    );
  }
}

function cargarVectorAltura(arrayAltura: number[], dimensionArreglo: number) {
  for (indice = 0; indice < dimensionArreglo; indice++) {
    arrayAltura[indice] = Number(
      prompt("Ingrese la altura deseado en la posición " + (indice + 1))
    );
  }
}

function cargarVectorNombres(arrayNombres: string[], dimensionArreglo: number) {
  for (indice = 0; indice < dimensionArreglo; indice++) {
    arrayNombres[indice] = String(
      prompt("Ingrese el nombre deseado en la posición " + (indice + 1))
    );
  }
}

// function intercambiar(arreglo :number[], i: number, j: number , k: string){
// let aux1 : number;
// let aux2 : string;
// aux1 = arreglo[i];
// arreglo[i] = arreglo[j];
// arreglo[j] = aux1;

// }

console.log("Cargando Vectores");
cargarVectorAños(arrayAños, dimensionArreglo);
cargarVectorAltura(arrayAltura, dimensionArreglo);
cargarVectorNombres(arrayNombres, dimensionArreglo);

for (indice = 0; indice < dimensionArreglo; indice++) {
  let j: number = 0;
  let i: number = 0;
  while (i < dimensionArreglo && arrayAños[indice] < arrayAños[indice + 1]) {
    i++;
  }
  for (j = dimensionArreglo; j > indice; j--) {
    arrayAños[indice] = arrayAños[indice - 1];
    arrayAltura[indice] = arrayAltura[indice - 1];
    arrayNombres[indice] = arrayNombres[indice - 1];
  }
}

for (indice = 0; indice < dimensionArreglo; indice++) {
  console.log("El año en la posición ", indice + 1, " es ", arrayAños[indice]);
  console.log(
    "La altura ingresada en la posición ",
    indice + 1,
    " es ",
    arrayAltura[indice]
  );
  console.log(
    "El nombre ingresado en la posición ",
    indice + 1,
    " es ",
    arrayNombres[indice]
  );
}

//function mostrarVector(arrayUsuario: number[], dimensionArreglo: number) {
//

// console.log("Los valores son : ");
// mostrarVector(arrayUsuario, dimensionArreglo);
// function contarPositivos(
//   arrayUsuario: number[],
//   dimensionArreglo: number
// ): number {
//   let contador: number = 0;
//   for (indice = 0; indice < dimensionArreglo; indice++) {
//     if (arrayUsuario[indice] > 0) {
//       contador++;
//     }
//   }
//   return contador;
// }

// for (indiceInv = dimensionArreglo - 1; indiceInv >= 0; indiceInv--) {
//   console.log(
//     "El número ingresado en la posición ",
//     (indiceInv + 1),
//     " es ",
//     arrayUsuario[indiceInv]
//   );
// }

// let num: number[] = new Array(5);
// let numero: number;
// let indice: number = 0;
// for (indice = 0; indice < 5; indice++) {
//   numero = Number(prompt("Ingrese un Número"));
//   num[indice] = numero;
// }
// for (indice = 0; indice < 5; indice++) {
//   num[indice] = numero;
//   // console.log("el número en la posición", indice, " es ", num[indice]);
//   console.log("El número en la posición", indice, "es ", num[indice]);
// }
