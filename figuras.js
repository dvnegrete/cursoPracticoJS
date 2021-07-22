//usando Arrow Funtions
//Cuadrado
perimetroCuadrado = lado => lado * 4;
areaCuadrado = lado => lado ** 2;

//Triangulo
perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 +base;
areaTriangulo = (base, altura) => (base * altura) / 2;

//codigo del circulo
diametroCirculo = radio => radio * 2;
perimetroCirculo = radio => diametroCirculo(radio) * Math.PI();
areaCirculo = radio => (radio ** 2) * Math.PI();

//Aqui interactuamos con el HTML
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








//funciones anteriores a usar arrow Functions

/* function perimetroCuadrado (lado) {
    return lado * 4;
}
function areaCuadrado(lado) {
    return lado * lado;
}

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}

function diametroCirculo (radio) {
    return radio * 2;
}
function perimetroCirculo (radio) {
    const diametro = diametroCirculo (radio);
    return diametro * PI;
}
function areaCirculo(radio) {
    return (radio * radio) * PI;
} */