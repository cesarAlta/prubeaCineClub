export class Pelicula {
  id: number | undefined;
  nombre: string | undefined;
  descripcion: string | undefined;
  fechaEstreno: Date | undefined;
  duracion: number | undefined;
  linkPelicula: string | undefined;
  linkTrailer: string | undefined;
  puntuacion: number =0;
  imagenPath: string|undefined;
  clasificacion: string| undefined;
  publicado: boolean|undefined;
}

export const peliculas:Pelicula[]=[
{
  id: 1,
  nombre: "La estrella",
  descripcion: "Victoria es madre soltera de Salvador e hija de un fallecido gran boxeador Cordobés. Marcos, el padre del niño, inicia un juicio para obtener la tenencia legal. Buscando contención, Victoria vuelve al gimnasio del que surgió su padre, a pesar de la resistencia de Salvador.",
  fechaEstreno: new Date(2018),
  duracion: 65,
  linkPelicula: "no",
  linkTrailer: "no",
  puntuacion: 300,
  imagenPath: "./assets/img/LaEstrella.jpg",
  clasificacion: 'atp',publicado:true,
},
{
  id: 2,
  nombre: "El verano que te vimos",
  descripcion: "Inicia un juicio para obtener la tenencia legal. Buscando contención, Victoria vuelve al gimnasio del que surgió su padre, a pesar de la resistencia de Salvador.",
  fechaEstreno: new Date(2018),
  duracion: 110,
  linkPelicula: "no",
  linkTrailer: "no",
  puntuacion: 250,
  imagenPath: "./assets/img/El verano que te vimos.jpeg",clasificacion: 'atp',publicado:false,
},
{
  id: 3,
  nombre: "Todas las pistas fueron falsas",
  descripcion: "Un hombre de mediana edad, recién separado, quiere dedicarse a escribir, el nihilismo lo inunda mientras intenta acercarse sentimentalmente, y con poca fortuna, a una mujer de la que siempre estuvo enamorado.",
  fechaEstreno: new Date(2018),
  duracion: 79,
  linkPelicula: "no",
  linkTrailer: "no",
  puntuacion: 400,
  imagenPath: "./assets/img/Todas-las-pistas-fueron-falsas-poster-.jpg",clasificacion: '+12',publicado:true,
},
{
  id: 4,
  nombre: "La noche mas larga",
  descripcion: "Sigue la historia del violador serial más conocido de la historia Argentina, que atacó a más de 93 mujeres en la ciudad de Córdoba entre 1985 y 2004 mientras paralelamente aparentaba ser un padre y esposo ejemplar. (FILMAFFINITY)",
  fechaEstreno: new Date(2018),
  duracion: 127,
  linkPelicula: "no",
  linkTrailer: "no",
  puntuacion: 110,
  imagenPath: "./assets/img/LaNocheMasLarga.jpg",clasificacion: '+16',publicado:true,
}
]