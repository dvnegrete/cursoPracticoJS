const lista1 = [
    100,
    200,
    300,
    500,
    900,
    300
];

const sumarValores = function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
}

function calcularMediaAritmetica (lista) {
    //let sumaLista = 0;
    //for (let i = 0; i < lista.length; i++) {
    //   sumaLista = sumaLista + lista[i];        
    //}
    const sumaLista = lista.reduce(sumarValores);
    const promedioLista = sumaLista / lista.length;    
    return promedioLista;    
}

const promedio = calcularMediaAritmetica(lista1);
console.log(promedio)