let numeroSecreto;
let intentos;
let numerosSorteados = [];
let numeroMaximo = 10;

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos===1)?'intento':'intentos'}`); //Los Template strings (delimitados por comillas inversas ``) simplifican la tarea de concatenar valores variables en una cadena, sin requerir concatenación manual de cadenas o conversiones explícitas de tipos.
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''; // Se puede obtener un ID, en vez de con getElementById, con querySelector, pero debemos indicarle que es un ID con #
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto(){
    let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;

    if(numerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya salieron todos');
    }else{
        if(numerosSorteados.includes(numeroSecreto)){
            return generarNumeroSecreto();
        }else{numerosSorteados.push(numeroSecreto);}
    }

    return numeroSecreto;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    // Generar el número aleatorio
    numeroSecreto = generarNumeroSecreto();
    // Inicializar el n° de intentos
    intentos = 1;
}

function reiniciarJuego(){
    // Limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números//Generar el número aleatorio nuevo//Reiniciar el n° de intentos
    condicionesIniciales();
    // Deshabilitar el botón de Nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();

// DESAFÍO 1
/*
function saludo(){
    console.log("Hola Mundo!");
}
saludo();

function saludoEspecial(nombre){
    console.log(`¡Hola, ${nombre}!`);
}
saludoEspecial("Illed");

function duplicador(numero){
    return numero*2;
}
console.log(duplicador(8));

function promedio(n1,n2,n3){
    return (n1+n2+n3)/3;
}
console.log(promedio(4,9,7));

function mayor(n1, n2){
    if(n1>n2){
        return n1;
    }else return n2;
}
console.log(mayor(9, 6));

function cuadrado(numero){
    return numero*numero;
}
console.log(cuadrado(4));
*/

// DESAFÍO 2
/*
function imc(metros, kgs){
    return kgs/(metros*metros);
}
console.log(imc(1.52,45));

function factorial(numero){
    let factorial = numero;
    for(let i = numero-1;i>0;i--){
        factorial = factorial * i;
    }
    return factorial;
}
console.log(factorial(6));

function conversorReales(dolares){
    return dolares*4.80;
}
console.log(24);

function areaYPerimetro(altura, anchura){
    let area = altura * anchura;
    let perimetro = altura * 2 + anchura * 2;
    
    console.log(`El área es de ${area} cms y el perímetro de ${perimetro} cms`);
}
areaYPerimetro(2.3, 4.2);

function tabla(numero){
    for(let i = 0; i<=10 ; i++){
        console.log(numero*i);
    }
}
tabla(6);
*/

// DESAFÍO 3
/*
let listaGenerica = [];
console.log(listaGenerica);

let lenguajesDeProgramacion = ['Javascript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguajesDeProgramacion);

lenguajesDeProgramacion.push('Java','Ruby','GoLang');

function mostrarLenguajes(){
    console.log(lenguajesDeProgramacion);
}
mostrarLenguajes();

function mostrarInvertido(){
    console.log(lenguajesDeProgramacion.reverse());
}
mostrarInvertido();

function promedioLista(lista){
    let suma = 0;
    for(let i = 0;i<lista.length;i++){
        suma = suma + lista[i];
    }
    return suma / lista.length;
}
console.log(promedioLista([4,9,6]));

function menorYMayor(lista){
    return `El mayor de la lista es ${Math.max(...lista)} y el menor ${Math.min(...lista)}`;
}
console.log(menorYMayor([4,9,6]));

function sumaLista(lista){
    let suma = lista.reduce((a, b) => a + b, 0);
    return suma;
}
console.log(sumaLista([4,9,6]));

function buscarElemento(lista, elemento){
    return lista.indexOf(elemento);
}
console.log(buscarElemento(lenguajesDeProgramacion,'Python'));

function fusionListas(l1,l2){
    let listaNueva = l1 + l2;
    return listaNueva;
}
console.log(fusionListas([1,2,3],[4,5,6]));

function cuadradoLista(lista){
    let listaNueva = [];
    for(let i = 0;i<lista.length;i++){
        listaNueva.push(lista[i]*lista[i]);
    }
    return listaNueva;
}
console.log(cuadradoLista([4,9,6]));
*/