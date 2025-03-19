// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema. ¡Buena suerte!

//Variables
const inputAmigo = document.getElementById('amigo');
// En el los requerimientos figura "Let amigos" pero el concepto de "lista" se me hizo más claro
let listaAmigos = [];
const ulListaAmigos = document.getElementById('listaAmigos');
const ulResultado = document.getElementById('resultado');

//Funciones
function agregarAmigo() {
    if (inputAmigo.value == '') {
        alert('Agrega un nombre');
        return;
    }
        listaAmigos.push(inputAmigo.value);
        inputAmigo.value = '';
        mostrarAmigos();

}

function mostrarAmigos() {
    ulListaAmigos.innerHTML = '';
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        ulListaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado];
    mostrarResultado(amigoSorteado);
}

function mostrarResultado(amigoSorteado) {
    ulResultado.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = `Amigo sorteado: ${amigoSorteado}`;
    ulResultado.appendChild(li);
}

function reiniciar() {
    listaAmigos.length = 0;
    ulListaAmigos.innerHTML = '';
    ulResultado.innerHTML = '';
}   

//Se utilizó más documentación para hacer los cambios necesarios en el código original


