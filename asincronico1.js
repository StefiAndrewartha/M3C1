class Libro{
    constructor (nombre, autor, editorial, genero){
        this.nombre = nombre
        this.autor = autor
        this.editorial = editorial
        this.genero = genero
    }
    mostrarLibro(){
        console.log(this.nombre + this.autor + this.editorial + this.genero);
    }
}

var libro1 = new Libro ("El Talismán del Adriático", "Joan Manuel Gisbert", "SM", "Infantil");
var libro2 = new Libro ("El Jugador", "Fiódor Dostoievski", "Mestas Ediciones", "Ficción");
var libro3 = new Libro ("Don Quijote de la Mancha", "Miguel de Cervantes Saavadra", "Edimat Libros", "Clásico");

libro1.mostrarLibro();
libro2.mostrarLibro();
libro3.mostrarLibro();

var ejemplar = [];
ejemplar[0] = libro1;
ejemplar[1] = libro2;
ejemplar[2] = libro3;
    console.log(ejemplar);

function filtroPorAutor(arregloEscrito, Escritor){
    for (i = 0; i < arregloEscrito.length; i++){
        if (Escritor == (arregloEscrito[i].autor)){
            console.log(arregloEscrito[i].nombreLibro)
        }
    }
}

