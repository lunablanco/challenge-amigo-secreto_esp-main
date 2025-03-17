// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variables
const inputAmigo = document.getElementById('amigo');
const listaAmigos = [];
const amigoSorteado = document.getElementById('amigo-sorteado');

//Funciones
function agregarAmigo() {
    if (inputAmigo.value === '') {
        alert('Debes ingresar un nombre');
    } else {
        listaAmigos.push(inputAmigo.value);
        inputAmigo.value = '';
        console.log(listaAmigos);
    }
}
agregarAmigo();

function sortearAmigo() {
    const amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    console.log(amigoSorteado);
    alert(`Tu amigo secreto es: ${amigoSorteado}`);
    }
