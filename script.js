import {barcelona, roma, paris, londres} from './ciudades.js'

// Obtener los elementos del DOM
let enlaces = document.querySelectorAll('a')

let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let precioElemento = document.getElementById('precio')
let parrafoElemento = document.getElementById('parrafo')

console.log(enlaces)

// Agregar un evento Click a cada enlace
enlaces.forEach( function(enlace){
    enlace.addEventListener('click', function(){
        // Remover la clase "active" de todos los enlaces
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active')
        });

        // Agregar la clase "active" al enlace actual
        this.classList.add("active")

        // Obtener el contenido correspondiente según el enlace
        let contenido = obtenerContenido(this.textContent)

        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        precioElemento.innerHTML = contenido.precio
        parrafoElemento.innerHTML = contenido.parrafo
    })

    // Agregar Active al que corresponda

    // Traer la informacion del objeto correspondiente a la eleccion

    // Mostrar el contenido en el DOM
});


// Agregar funcion para obtener informacion de ciudaddes.js
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres
    };

    return contenido[enlace];
}