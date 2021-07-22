//usando Arrow Funtions
//Cuadrado
perimetroCuadrado = lado => lado * 4;
areaCuadrado = lado => lado ** 2;

//codigo del circulo
diametroCirculo = radio => radio * 2;
perimetroCirculo = radio => diametroCirculo(radio) * Math.PI;
areaCirculo = radio => (radio ** 2) * Math.PI;

//Triangulo
perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
areaTriangulo = (base, altura) => (base * altura) / 2;

//calcular altura de Equilatero
function alturaEquilatero(hipotenusa) {
    const cateto2 = hipotenusa / 2;
    const altura = Math.sqrt ((hipotenusa**2) - (cateto2 ** 2));
    alert(`Este es un triángulo equilatero con una una altura de ${altura} `);    
}
//calcular isósceles.
function evaluarIsosceles(lado1, lado2, lado3) {
    if (lado1 === lado2) {
        isoscelesAltura(lado1, lado3);
    } else if (lado1 === lado3) {
        isoscelesAltura(lado1, lado2);
    } else {
        isoscelesAltura(lado2,lado1);
    }
}
function isoscelesAltura (hipotenusa,largo) {
    const cateto2 = largo / 2;
    const altura = Math.sqrt ((hipotenusa**2) - (cateto2 ** 2));
    alert(`Este es un triángulo isósceles con una una altura de ${altura} `);
}

//calcular Escaleno
function escalenoAltura() {
    alert("Es un triangulo Triángulo Escaleno, Mas adelante estara lista esta función");
    //calcular con la formula de Herón
}

//Aqui interactuamos con el HTML
//cuadrado
function calcularPerimetroCuadrado() {
    const inputCuadrado = document.getElementById("inputCuadrado");
    const value = inputCuadrado.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const inputCuadrado = document.getElementById("inputCuadrado");
    const value = inputCuadrado.value;
    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo
function calcularPerimetroTriangulo() {
    const inputTriangulo1 = document.getElementById("inputTriangulo1");
    const inputTriangulo2 = document.getElementById("inputTriangulo2");
    const inputBase = document.getElementById("inputBase");
    const value1 = parseFloat(inputTriangulo1.value);
    const value2 = parseFloat(inputTriangulo2.value);
    const valueBase = parseFloat(inputBase.value);
    const perimetro = perimetroTriangulo(value1, value2, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputTrianguloHeight = document.getElementById("inputTrianguloHeight");
    const inputBase = document.getElementById("inputBase");
    const valueAltura = parseFloat(inputTrianguloHeight.value);
    const valueBase = parseFloat(inputBase.value);
    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}

//Circulo
function calcularDiametroCirculo() {
    const inputRadio = document.getElementById("inputRadio");
    const value = parseFloat(inputRadio.value);
    const diametro = diametroCirculo(value);
    alert(diametro);
}
function calcularPerimetroCirculo() {
    const inputRadio = document.getElementById("inputRadio");
    const value = parseFloat(inputRadio.value);
    const diametro = diametroCirculo(value);
    const perimetro = perimetroCirculo(diametro);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const inputRadio = document.getElementById("inputRadio");
    const value = parseFloat(inputRadio.value);
    const diametro = diametroCirculo(value);
    const area = areaCirculo(diametro);
    alert(area);
}

//Determinar si triangulo es isósceles y determinar area y perimetro

function calcularTipoTriangulo() {
    const inputLado1 = document.getElementById("inputTriangulo1");
    const inputLado2 = document.getElementById("inputTriangulo2");
    const inputLado3 = document.getElementById("inputBase");
    const triangulo = [parseFloat(inputLado1.value), parseFloat(inputLado2.value), parseFloat(inputLado3.value)];
   //¿es un triágulo Equilatero?
    if (triangulo[0] == triangulo[1] && triangulo[0] == triangulo[2]) {
        console.log("Triangulo Equilatero");
        alturaEquilatero(triangulo[0]);
    } 
    //¿es un triágulo Isósceles?
        else if (triangulo[0] === triangulo[1] || triangulo[0] === triangulo[2] || triangulo[1] === triangulo[2]) {
            evaluarIsosceles(triangulo[0], triangulo[1], triangulo[2]);
    } else {
        escalenoAltura();
        //calcular despues con la formula de Herón
    }
}

//otras formas de comprobacion
   /*  const triangulo = [parseFloat(inputLado1), parseFloat(inputLado2), parseFloat(inputLado3)];
    if (triangulo[0] === triangulo[1]){ 
        console.log("1 Es un Isoceles");
    }   else if (triangulo[0] === triangulo[2]) {
        console.log("2 Es un Isoceles");
    }   else if (triangulo[1] === triangulo[2]){
        console.log("3 Es un Isoceles");
    }   else {
        console.log("No es un triangulo Isoceles");
    }

    //segunda forma
    if (triangulo[0] === triangulo[1] || triangulo[0] === triangulo[2] || triangulo[1] === triangulo[2]) {
        console.log("1 Es un Isoceles");
    } else {
        console.log("No es un triangulo Isoceles");
    }
    
    //tercera forma
    (triangulo[0] === triangulo[1] || triangulo[0] === triangulo[2] || triangulo[1] === triangulo[2]) ? isoscelesAltura(triangulo[0], triangulo[1], triangulo[2]) : escalenoAltura(); */


    
    
    /* if (triangulo[0] === triangulo[1]) { 
        console.log("1 Es un Isoceles");
        isoscelesAltura(triangulo[0], triangulo[1], triangulo[2]);
    }   else if (triangulo[0] === triangulo[2]) {
        console.log("2 Es un Isoceles");
        isoscelesAltura(triangulo[0], triangulo[2], triangulo[1]);
    }   else if (triangulo[1] === triangulo[2]){
        console.log("3 Es un Isoceles");
        isoscelesAltura(triangulo[1], triangulo[2], triangulo[0]);
    }   else {
        console.log("No es un triangulo Isoceles");
        escalenoAltura();
    } */