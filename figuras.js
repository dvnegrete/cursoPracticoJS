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
    const area = (hipotenusa * altura) /2;
    alert(`Es un triángulo equilatero con una altura de ${altura.toFixed(2)}, y su área  es de: ${area.toFixed(2)}`);    
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
function isoscelesAltura (hipotenusa,base) {
    const cateto2 = base / 2;
    const altura = Math.sqrt ((hipotenusa**2) - (cateto2 ** 2));
    const area = (base * altura) / 2;
    alert(`Es un triángulo isósceles con una una altura de ${altura.toFixed(2)}, y su área es de : ${area.toFixed(2)}`);
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
    const lado1 = document.getElementById("inputLado1");
    const lado2 = document.getElementById("inputLado2");
    const lado3 = document.getElementById("inputLado3");
    const value1 = parseFloat(lado1.value);
    const value2 = parseFloat(lado2.value);
    const value3 = parseFloat(lado3.value);
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}
//Determinar si triangulo es isósceles y determinar altura y área .
function calcularTipoTriangulo() {
    const lado1 = document.getElementById("inputLado1");
    const lado2 = document.getElementById("inputLado2");
    const lado3 = document.getElementById("inputLado3");
    const triangulo = [parseFloat(lado1.value), parseFloat(lado2.value), parseFloat(lado3.value)];
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
        //calculo pendiente con la formula de Herón
    }
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