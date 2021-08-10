//Helpers
esPar = valor => (valor % 2 === 0);

function calcularMediaAritmetica (lista) {
    const sumaLista = lista.reduce (
       function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Calculadora de Medianas

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const mitadLista1 = lista[mitad -1];
        const mitadLista2 = lista[mitad];
        const mediana = calcularMediaAritmetica([mitadLista1,mitadLista2]);
        return mediana;
    } else {
        const mitadLista = lista[mitad];
        return mitadLista;

    }
}

const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosColSort = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

//Mediana del Top 10%

const spliceStart = (salariosColSort.length * 90) / 100;
const spliceCount = salariosColSort.length - spliceStart;
const salariosColTop10 = salariosColSort.splice(spliceStart,spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

//const promedioSalarios = calcularMediaAritmetica();

console.log(`La mediana del top 10 de salarios de nuestra lista es de: ${medianaTop10Col}`);



  