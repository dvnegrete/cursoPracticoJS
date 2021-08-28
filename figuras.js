//Formulas base usando Arrow Funtions
//Cuadrado
perimetroCuadrado = lado => lado * 4;
areaCuadrado = lado => lado ** 2;

//codigo del circulo
diametroCirculo = radio => radio * 2;
perimetroCirculo = radio => diametroCirculo(radio) * Math.PI;
areaCirculo = radio => (radio ** 2) * Math.PI;

//Triangulo
perimetroTriangulo = (a, b, c) => a + b + c;
areaTriangulo = (base, altura) => (base * altura) / 2;

//calcular altura de Equilatero
function alturaEquilatero(hipotenusa) {
    const cateto2 = hipotenusa / 2;
    const altura = Math.sqrt ((hipotenusa**2) - (cateto2 ** 2));
    const area = (hipotenusa * altura) /2;   
    return area;
}
//calcular isósceles.
function isoscelesAltura (hipotenusa, base) {
    const cateto2 = base / 2;
    const altura = Math.sqrt ((hipotenusa**2) - (cateto2 ** 2));
    const area = (base * altura) / 2;
    return area;
}
function evaluarIsosceles(a, b, c) {    
    if (a === b) {
        const area = isoscelesAltura(a, c);
        return area;
    } else if (a === c) {
        const area = isoscelesAltura(a, b);
        return area;
    } else {
        const area = isoscelesAltura(b, a);
        return area;
    }    
}

//calcular Escaleno. Formula de Heron
function areaEscaleno(array) {
    const semiP = perimetroTriangulo(array[0],array[1], array[2]) / 2;
    const area = Math.sqrt(semiP*(semiP-array[0])*(semiP-array[1])*(semiP-array[2]));
    return area;
}

//Determinar si triangulo es isósceles y determinar altura y área .
function calcularTipoTriangulo(a,b,c) {    
    let arrayTriangulo = [];
    const triangulo = [a,b,c];
        //¿es un triágulo Equilatero?
    if (triangulo[0] == triangulo[1] && triangulo[0] == triangulo[2]) {        
        const area = alturaEquilatero(triangulo[0]);
        arrayTriangulo.push(area);
        arrayTriangulo.push("equilatero");
        return arrayTriangulo;
    } 
        //¿es un triágulo Isósceles?
        else if (triangulo[0] === triangulo[1] || triangulo[0] === triangulo[2] || triangulo[1] === triangulo[2]) {
        const area = evaluarIsosceles(triangulo[0], triangulo[1], triangulo[2]);            
        arrayTriangulo.push(area);
        arrayTriangulo.push("isósceles");
        return arrayTriangulo;
    } //entonces en un escaleno 
    else {
        const area = areaEscaleno([...triangulo]);        
        arrayTriangulo.push(area);
        arrayTriangulo.push("escaleno");
        return arrayTriangulo;
    }    
}

function infoTypeInHTML(perimetro, area, tipo) {  
const nodePrevious = document.querySelector(`#trianguloResult`);
    nodePrevious.innerHTML = `Este es un triangulo ${tipo}, con un perimetro de
        <strong>${perimetro.toFixed(2)}</strong>, y un área de <strong>${area.toFixed(2)}</strong>`;
}

//Creando resultados en HTML
function createElementHTML (perimetro, area, idElement) {
    const mountNode = document.querySelector(`#${idElement}`);
    const nodePrevious = document.querySelector(`#${idElement}Result`);
    if (nodePrevious) {
        nodePrevious.innerHTML = `Este ${idElement} tiene un perimetro de:
        <strong>${perimetro.toFixed(2)}</strong>, y un área de: <strong>${area.toFixed(2)}</strong>`;         
    } else {
        const nodo =  document.createElement("div");
        nodo.id = `${idElement}Result`;    
        nodo.innerHTML = `Este ${idElement} tiene un perimetro de:
        <strong>${perimetro.toFixed(2)}</strong>, y un área de: <strong>${area.toFixed(2)}</strong>`;
        mountNode.parentElement.insertAdjacentElement("beforeend",nodo);        
        nodo.className = "resultFigurasDiv";
        mountNode.className = "calculadoras__form--change";
    }
}

//creado ID para nodo de HTML
function extraerId (value) {
    const form = document.querySelector(`#${value}`);
    const idElement = form.id;
    return idElement;
}

//Aqui interactuamos con el HTML
//cuadrado
function calcularCuadrado() {
    const inputCuadrado = document.getElementById("inputCuadrado");    
    const value = inputCuadrado.value;    
    const perimetro = perimetroCuadrado(value);
    const area = areaCuadrado(value);
    const id = extraerId("cuadrado");    
    createElementHTML(perimetro, area, id);
}

//Triangulo
function calcularTriangulo() {    
    const lado1 = document.getElementById("inputLado1");
    const lado2 = document.getElementById("inputLado2");
    const lado3 = document.getElementById("inputLado3");
    const a = parseFloat(lado1.value);
    const b = parseFloat(lado2.value);
    const c = parseFloat(lado3.value);    
    const perimetro = perimetroTriangulo(a, b, c);
    const arrayTriangulo = calcularTipoTriangulo(a,b,c);
    const area = arrayTriangulo[0];
    const tipoTriangulo = arrayTriangulo[1];
    const id = extraerId("triangulo");
    createElementHTML(perimetro, area, id);
    infoTypeInHTML(perimetro, area, tipoTriangulo);
}

//Circulo
function calcularCirculo () {
    const inputRadio = document.getElementById("inputRadio");
    const value = parseFloat(inputRadio.value);
    const diametro = diametroCirculo(value);    
    const perimetro = perimetroCirculo(diametro);
    const area = areaCirculo(diametro);
    const id = extraerId("circulo");    
    createElementHTML(perimetro, area, id);
}