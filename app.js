let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    //console.log("numeroSecreto");
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`acertaste el numero secreto, probando ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','el numero secreto es menor');
        } else {
            asignarTextoElemento('p','el numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroRandom() {
     let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    if (listaNumerosSorteadositories.lenght == numeroMaximo) {
        asignarTextoElemento('p','no hay mas numeros disponibles');
    } else{
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroRandom();
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    return;
}

function condicionesPredeterminadas(){
    asignarTextoElemento('h1','juego del numero secreto!!');
    asignarTextoElemento('p',`indica un numeor del 1 al ${numeroMaximo} para jugar!`);
    numeroSecreto = generarNumeroRandom();
    intentos = 1;
}

function reiniciarJuego() {
     limpiarCaja();
     condicionesPredeterminadas();
     document.querySelector('#reiniciar').setAttribute('disabled',true); 
}


condicionesPredeterminadas();
