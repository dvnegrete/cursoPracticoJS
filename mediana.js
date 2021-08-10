function calcularMediaAritmetica (lista) {
    const sumaLista = lista.reduce (
       function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const lista1 = [
    100,    
    200,
    30,
    7000,
    500,
    45,
    600000,
    250
];

const listaOrdenada = lista1.sort(function(a,b){
    return a - b;
});

const mitadLista =  parseInt(lista1.length / 2);

function esPar (numerito) {
    // % modulo de residuo. si hay residuo de la divion, quiere decir que es impar.
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

//lista1 es par?
if (esPar(lista1.length)) {
    const elemento1 =lista1[mitadLista - 1];
    const elemento2 = lista1[mitadLista];
    const promedioElementos = calcularMediaAritmetica([elemento1,elemento2]);
    mediana = promedioElementos;
} else {
//si no es par
    mediana = lista1[mitadLista]
}