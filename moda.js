const listaUL = document.getElementById("capturaListaUL");
const inputCapture = document.getElementById("dateArray");
const buttonCapture = document.getElementById("buttonCapture");
const buttonResult = document.getElementById("buttonResult");
const buttonRestart = document.querySelector("#restart");
const resultP = document.getElementById("ResultP");
let resultModa;
let listCaptureHTML = [];

//Creación de función
let listaCount = {};
function moda (lista) {   
    lista.map(
        function (elemento) {            
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;            
            } else {
                listaCount[elemento] = 1;            
            }        
        }
    );    
    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB) {      
            return elementoA[1] - elementoB[1];
        }
    );
    
    //listaArray
    resultModa = listaArray[listaArray.length -1]; 
    console.log(`La moda de la lista es el número: ${resultModa[0]}, con : ${resultModa[1]} veces repitiendose en la lista`);
    return resultModa;
}

function crearArray (valor) {
    return listCaptureHTML.push(valor);
}

const removeLi = function(){    
    while (listaUL.childElementCount > 0) {
        listaUL.firstElementChild.remove();
    }
}

function cleanArray (array) {    
    const newArrayClean= array.splice(0,array.length);
    return newArrayClean;    
}

//HTML. capturar dato por dato
const capturarDatoArray = function() {    
    let numberCapture = inputCapture.value;    
    if(numberCapture != "") {
        crearArray(numberCapture);        
        let etiquetaLI = document.createElement("li");
        listaUL.appendChild(etiquetaLI);
        etiquetaLI.innerText =`${numberCapture}`;    
    }
}

const comprobarEnter = (key) => {    
    const teclaCode = key.charCode;
        if (teclaCode === 13 ) {
            key.preventDefault();
            console.log(inputCapture.value);            
            capturarDatoArray();        
            inputCapture.value = "";
        }         
    key.stopPropagation();    
}

const reiniciarConteo = function () {
    inputCapture.value = "";
    cleanArray(listCaptureHTML);
    cleanArray(resultModa);
    listaUL.classList.remove("capturaTerminada");
    removeLi();
    resultP.innerHTML = "";
}

//conexion con HTML
const calcularModa = function() {
    moda(listCaptureHTML);    
    resultP.innerHTML =`La moda es: ${resultModa[0]}. <br> Se repite ${resultModa[1]} veces.`;    
    listaUL.classList.toggle("capturaTerminada");
    cleanArray(listCaptureHTML);
    cleanArray(resultModa);
}

buttonCapture.addEventListener("click", capturarDatoArray);
buttonResult.addEventListener("click", calcularModa);
inputCapture.addEventListener("keypress", comprobarEnter);
buttonRestart.addEventListener("click", reiniciarConteo);
