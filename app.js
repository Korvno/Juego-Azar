
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignartextoElemento(elemento, texto) {
     let elementoHTML = document.querySelector(elemento);
     elementoHTML.innerHTML = texto;
}

function verificarIntento() {
     let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

     /* Operador ternario en el primer if */
     if (numeroDeUsuario == numeroSecreto) {
         asignartextoElemento('p',`Acertaste el Número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
         /* El boton se activa despues de acertar el número */
         document.getElementById('reiniciar').removeAttribute('disabled');
     }else {
         if (numeroDeUsuario > numeroSecreto) {
             asignartextoElemento('p', 'El numero secreto es menor');
         }else {
            asignartextoElemento('p', 'El número secreto es mayor');
         }
         intentos++;
         limpiarCaja();
     } return;
}
/*Tips:
*ctrl + F = buscar cualquier cosa
* coma invertida = alt + 96 
*/
function limpiarCaja() {
     document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
     let numeroGenerado = Math.floor(Math.random()*numeroMaximo + 1);

     console.log(numeroGenerado);
     console.log(listaNumerosSorteados);

     //Si ya sorteamos todos los numeros:
     if (listaNumerosSorteados.length == numeroMaximo) {

         asignartextoElemento('p', 'Ya se asignaron todos los números posibles');

     }else{
            // Si el numero generado está incluido en la lista
         if (listaNumerosSorteados.includes(numeroGenerado)) {
             return generarNumeroSecreto();
        }else{
             listaNumerosSorteados.push(numeroGenerado);
             return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
     asignartextoElemento('h1', 'Juego del número secreto');
     asignartextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
     numeroSecreto = generarNumeroSecreto();
     intentos = 1;
}
/**
 * Funcion que tendra funciones iniciales para resetear el juego
 */
function reiniciarJuego() {
     limpiarCaja ();
     condicionesIniciales();
     document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
