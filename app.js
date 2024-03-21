//* 1.- Crear una función que encuentre el número más repetido en un array.

function findMostFrequent(arr) {
    let frequencyMap = {}
    let maxCount = 0
    let mostFrequent = arr[0]
    
    arr.forEach(function(number) {
        frequencyMap[number] = (frequencyMap[number] || 0) + 1
        if (frequencyMap[number] > maxCount) {
            maxCount = frequencyMap[number]
            mostFrequent = number
        }
    });
    
    return mostFrequent
}

// Ejemplo de uso:
const inputArray = [3, 6, 1, 8, 2, 3, 6, 3, 2, 5, 6]
console.log(findMostFrequent(inputArray)) // Debería imprimir 6

//* 2.- Crear una función que encuentre las letras en un arreglo de números y regrese un nuevo arreglo de letras.

function filterLetters(arr) {
    return arr.filter(item => typeof item === 'string' && isNaN(item))
}

// Ejemplo de uso:
const inputArray2 = [8, 'e', 7, 2, 'a', 'd', 'f', 2, 3, 1, 4, 3]
console.log(filterLetters(inputArray2)) // Debería imprimir ['e', 'a', 'd', 'f']

//* 3.- Crear una función que busque el número más grande en un arreglo.

function findLargestNumber(arr) {
    return Math.max(...arr)
}

// Ejemplo de uso:
const inputArray3 = [1, 4, 7, 2, 4, 1, 9, 4, 0, 2, 4, 5, 12]
console.log(findLargestNumber(inputArray3)) // Debería imprimir 12

//* 4.- Crear una función que busque el número más pequeño en el arreglo.

function findSmallestNumber(arr) {
    return Math.min(...arr)
}

// Ejemplo de uso:
const inputArray4 = [1, 4, 5, -1, -7, 2, 3, 9]
console.log(findSmallestNumber(inputArray4)) // Debería imprimir -7

//* 5.- Crear una clase llamada ``Contacto`` con los siguientes datos:

class Contacto {
    constructor(nombre, apellidos, telefono) {
        this.nombre = nombre
        this.apellidos = apellidos
        this.telefono = telefono
    }
}

// Ejemplo de uso:
const contacto = new Contacto('Gibran', 'Valadez', '1234567890')
console.log(contacto)

//* Después crear una clase que sea ListaContactos la cual tendrá dos métodos:

class Contacto2 {
    constructor(nombre, apellidos, telefono) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
    }
}

class ListaContactos {
    constructor() {
        this.lista = [];
    }

    agregarContacto(contacto) {
        this.lista.push(contacto);
    }

    buscarContacto(nombre) {
        return this.lista.filter(contacto => contacto.nombre === nombre);
    }
}

// Ejemplo de uso:
const listaDeContactos = new ListaContactos();
listaDeContactos.agregarContacto(new Contacto2('Juan', 'Pérez', '1234567890'));
listaDeContactos.agregarContacto(new Contacto2('Ana', 'García', '0987654321'));

// Buscar un contacto por nombre
const contactoBuscado = listaDeContactos.buscarContacto('Ana');
console.log(contactoBuscado);











