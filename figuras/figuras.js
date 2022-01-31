// Codigo del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 

function areaCuadrado(lado){
    return lado * lado
} 
console.groupEnd();



// Codigo del triangulo
console.group("Triangulos");



//    "Los lados del triangulo miden: " 
//    + ladoTriangulo1 
//    + "cm, " 
//    + ladoTriangulo2 
//    + "cm, " 
//    + baseTriangulo 
//    + "cm"
//);

//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

function areaTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo){
    const lado1 = Number(ladoTriangulo1) 
    const lado2 = Number(ladoTriangulo2) 
    const base  = Number(baseTriangulo);
    
    baseDiv = base / 2;
    baseMulti = baseDiv ** 2; 
    ladoMulti = lado1 * lado2;
    resultado = ladoMulti - baseMulti;
    raizCuadrada = Math.sqrt(resultado);
    return (baseTriangulo * raizCuadrada) / 2
}

function perimetroTriangulo (ladoTriangulo1, ladoTriangulo2, baseTriangulo){
    return (Number(ladoTriangulo1) + Number(ladoTriangulo2) + Number(baseTriangulo));
}

function alturaTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo){
    const lado1 = Number(ladoTriangulo1) 
    const lado2 = Number(ladoTriangulo2) 
    const base  = Number(baseTriangulo);
    
    if (ladoTriangulo1 === ladoTriangulo2 && ladoTriangulo1 != baseTriangulo){
        alert("Es isoseles")
    }else{
        alert("No es isoseles")
    }
    baseDiv = base / 2;
    baseMulti = baseDiv ** 2; 
    ladoMulti = lado1 * lado2;
    resultado = ladoMulti - baseMulti;
    raizCuadrada = Math.sqrt(resultado);
    return raizCuadrada;
}


console.groupEnd();

// codigo circulo
console.group("Circulos");


// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro
function diametroCirculo(radioCirculo){
    return radioCirculo * 2;
} 

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI;
} 

// Área
function areaCirculo(radioCirculo){
    return (radioCirculo * radioCirculo) * PI;
} 
console.log("El area del circulo es: " + areaCirculo + "cm2");

console.groupEnd();


// Aqui interactuamos con HTML cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}


// Aqui interactuamos con HTML Triangulo

function calcularAreaTriangulo(){
    const input1 = document.getElementById("lado1");
    const input2 = document.getElementById("lado2");
    const input3 = document.getElementById("base");
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;

    
    const area = areaTriangulo(value1, value2, value3);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("lado1");
    const input2 = document.getElementById("lado2");
    const input3 = document.getElementById("base");
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;


    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}




function calcularAlturaTriangulo(){
    const input1 = document.getElementById("lado1");
    const input2 = document.getElementById("lado2");
    const input3 = document.getElementById("base");
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;

    const altura = alturaTriangulo(value1, value2, value3)
    alert(altura)
}





// Aqui interactuamos con HTML Circulo
function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    
    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularCircunferenciaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    
    const circunferencia = perimetroCirculo(value);
    alert(circunferencia);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    
    const area = areaCirculo(value);
    alert(area);
}