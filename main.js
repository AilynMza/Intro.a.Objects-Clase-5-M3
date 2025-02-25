/* EJERCICIO EN CLASE
const persona = {
  nombre: "Ailyn",
  pasatiempos: ["anime", "videojuegos"],
  mascota: "Nieve",
};

console.log(
  "Hola soy " +
    persona.nombre +
    ", mis pasatiempos son ver " +
    persona.pasatiempos[0] +
    ", jugar " +
    persona.pasatiempos[1] +
    " y tengo un perro que se llama " +
    persona.mascota
);
*/

class Libro {
  constructor(titulo, autor, anio, estado) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.estado = estado;
    this.capitulos = [];
  }

  describirLibro() {
    console.log(
      `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`
    );
  }

  agregarCapitulo(capitulo) {
    this.capitulos.push(capitulo);
    console.log(`Capítulo "${capitulo}" agregado al libro "${this.titulo}".`);
  }

  eliminarCapitulo(capitulo) {
    const indice = this.capitulos.indexOf(capitulo);
    if (indice !== -1) {
      this.capitulos.splice(indice, 1);
      console.log(
        `Capítulo "${capitulo}" eliminado del libro "${this.titulo}".`
      );
    } else {
      console.log(
        `El capítulo "${capitulo}" no se encontró en el libro "${this.titulo}".`
      );
    }
  }
}

// EJEMPLO:
const miLibro = new Libro(
  "El Principito",
  "Antoine de Saint-Exupéry",
  1943,
  "disponible"
);
miLibro.describirLibro();
miLibro.agregarCapitulo("Capítulo 1");
miLibro.agregarCapitulo("Capítulo 2");
miLibro.eliminarCapitulo("Capítulo 1");
console.log(miLibro.capitulos);
