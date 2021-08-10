let resultModa;

//Creación de función
let listaCount = {};
function moda (lista) {
    //.map reccore cada elemento del array
    lista.map(
        function (elemento) {
            //ahora asignamos los valores al objeto creado y vamos contabilizando.
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;            
            } else {
                listaCount[elemento] = 1;            
            }        
        }
    );
    //regresamos el objeto a otro array de array = [[],[],[]] con Object.entries
    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB) {
            //con la funcion de este metodo sort ordenamos los elementos
            return elementoA[1] - elementoB[1];
        }
    );
    //listaArray
    
    resultModa = listaArray[listaArray.length -1]; 
    console.log(`La moda de la lista es el número: ${resultModa[0]}, con : ${resultModa[1]} veces repitiendose en la lista`);
    return resultModa;
}

let listCaptureHTML = [];

function crearArray (valor) {
    return listCaptureHTML.push(valor);
}

let listaUL = document.getElementById("capturaListaUL");

//conexion con HTML
function onClickButtonNumberDatos() {
    moda(listCaptureHTML);
    const resultP = document.getElementById("ResultP");
    resultP.innerHTML =`La moda es: ${resultModa[0]}. <br> Se repite ${resultModa[1]} veces.`;    
    listaUL.style.color = "#b8a771";
}

//HTML. capturar dato por dato
function capturarDatoArray() {
    let inputCapture = document.getElementById("dateArray");
    let numberCapture =inputCapture.value;    
    crearArray(numberCapture);        
    let etiquetaLI = document.createElement("li");
    listaUL.appendChild(etiquetaLI);
    etiquetaLI.innerText =`${numberCapture}`;
}