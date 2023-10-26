import { Awards } from './Awards';
import { Genero } from './Genero';
import { ImageMovie } from './ImageMovie';
import { imagesTypes } from './ImageType';
import { Member, members } from './member';

export class Pelicula {
  id: number | undefined;
  title: string | undefined;
  synopsis: string | undefined;
  relaseYear: number | undefined;
  durationInMinutes: number | undefined;
  castMovie: Member[] | undefined;
  technicalTeam: Member[] | undefined;
  ratingMovie?: number = 0;
  linkTrailer: string | undefined;
  linkPelicula: string | undefined;
  imagesUrlCover: string | undefined;
  imagesUrlBillboard: string | undefined;
  ratingMovieINCAA: string | undefined;
  origilaFormat: string | undefined;
  awardsWon?: any[];
  publiclyVisible!: boolean;
  genero!: Genero;
  isPremiere: boolean|undefined;
  imagesUrlCoverPremier: string|undefined;
}

export const peliculas: Pelicula[] = [
  {
    id: 1,
    title: 'La estrella',
    synopsis:
      'Victoria es madre soltera de Salvador e hija de un fallecido gran boxeador Cordobés. Marcos, el padre del niño, inicia un juicio para obtener la tenencia legal. Buscando contención, Victoria vuelve al gimnasio del que surgió su padre, a pesar de la resistencia de Salvador.',
    relaseYear: 2018,
    durationInMinutes: 65,
    linkPelicula: 'no',
    linkTrailer: 'no',
    ratingMovie: 300,

    imagesUrlBillboard: './assets/img/laEstrella/LaEstrella-Poster.jpg',
    imagesUrlCoverPremier:'./assets/img/laEstrella/laEstrella-CoverEstreno.jpg',

    imagesUrlCover: '../assets/img/laEstrella/LaEstrella-Cover.jpg',

    ratingMovieINCAA: 'atp',
    publiclyVisible: true,
    awardsWon: [{ name: 'Goya', year: '2019' }],
    castMovie: [
      {
        id: 1,
        firstname: 'actor1',
        lastname: 'apellido-actor1',
        rol: { id: 1, name: 'Actor' },
      },
    ],
    technicalTeam: [
      {
        id: 1,
        firstname: 'actor1',
        lastname: 'apellido-actor1',
        rol: { id: 1, name: 'Actor' },
      },
    ],
    origilaFormat: 'Formato original',
    genero: { id: 1, nombre: 'Drama' },
    isPremiere: true
  },
  {
    id: 2,
    title: 'El verano que te vimos',
    synopsis:
      'Inicia un juicio para obtener la tenencia legal. Buscando contención, Victoria vuelve al gimnasio del que surgió su padre, a pesar de la resistencia de Salvador.',
    relaseYear: 2018,
    durationInMinutes: 110,
    linkPelicula: 'no',
    linkTrailer: 'no',
    ratingMovie: 250,
    imagesUrlBillboard: '../../assets/img/elVeranoQueTeVimos/ElVerano-Poster.jpg',
    imagesUrlCoverPremier:'../../assets/img/elVeranoQueTeVimos/ElVerano-CoverEstreno.jpg',
    imagesUrlCover: '../../assets/img/elVeranoQueTeVimos/ElVerano-cover.jpg',
    ratingMovieINCAA: 'atp',
    publiclyVisible: true,
    awardsWon: [{ name: 'Goya', year: '2019' }],
    castMovie: [
      {
        id: 1,
        firstname: 'actor1',
        lastname: 'apellido-actor1',
        rol: { id: 1, name: 'Actor' },
      },
      {
        id: 2,
        firstname: 'actor2',
        lastname: 'apellido-actor2',
        rol: { id: 1, name: 'Actor' },
      },
      {
        id: 3,
        firstname: 'actriz3',
        lastname: 'apellido-actriz3',
        rol: { id: 1, name: 'Actriz' },
      },
    ],
    technicalTeam: [
      {
        id: 1,
        firstname: 'Director1',
        lastname: 'apellido-director1',
        rol: { id: 1, name: 'Director' },
      },
      {
        id: 2,
        firstname: 'productor',
        lastname: 'apellido-productor1',
        rol: { id: 1, name: 'Productor' },
      },
      {
        id: 3,
        firstname: 'guinista',
        lastname: 'apellido-guinista',
        rol: { id: 1, name: 'Guion' },
      },
      {
        id: 4,
        firstname: 'sonidista',
        lastname: 'apellido-sonidista',
        rol: { id: 1, name: 'Sonido' },
      },
      {
        id: 5,
        firstname: 'Arte',
        lastname: 'apellido-arte',
        rol: { id: 1, name: 'Arte' },
      },
    ],
    origilaFormat: 'Formato original',
    genero: { id: 1, nombre: 'Drama' },
    isPremiere: true

  },
  {
    id: 3,
    title: 'Todas las pistas fueron falsas',
    synopsis:
      'Un hombre de mediana edad, recién separado, quiere dedicarse a escribir, el nihilismo lo inunda mientras intenta acercarse sentimentalmente, y con poca fortuna, a una mujer de la que siempre estuvo enamorado.',
    relaseYear: 2018,
    durationInMinutes: 79,
    linkPelicula: 'no',
    linkTrailer: 'no',
    ratingMovie: 400,
    imagesUrlBillboard:
      './assets/img/TodasLasPistas/TodasLasPistas-Poster.jpg',
    imagesUrlCoverPremier:'./assets/img/TodasLasPistas/TodasLasPistas-CoverEstreno.jpg',

    imagesUrlCover:  './assets/img/TodasLasPistas/TodasLasPistas-Cover.jpg',
    ratingMovieINCAA: 'atp',
    publiclyVisible: false,
    awardsWon: [{ name: 'Goya', year: '2019' }],
    castMovie: [
      {
        id: 1,
        firstname: 'actor1',
        lastname: 'apellido-actor1',
        rol: { id: 1, name: 'Actor' },
      },
    ],
    technicalTeam: [
      {
        id: 1,
        firstname: 'actor1',
        lastname: 'apellido-actor1',
        rol: { id: 1, name: 'Actor' },
      },
    ],
    origilaFormat: 'Formato original',
    genero: { id: 1, nombre: 'Drama' },
    isPremiere: true

  },

  {
    id: 4,
    title: 'La noche mas larga',
    synopsis:
      'Sigue la historia del violador serial más conocido de la historia Argentina, que atacó a más de 93 mujeres en la ciudad de Córdoba entre 1985 y 2004 mientras paralelamente aparentaba ser un padre y esposo ejemplar. (FILMAFFINITY)',
    relaseYear: 2018,
    durationInMinutes: 127,
    linkPelicula: 'no',
    linkTrailer: 'no',
    ratingMovie: 110,
    imagesUrlBillboard: '../../assets/img/LaNocheMasLarga/LaNoche-Poster.jpg',
    imagesUrlCoverPremier:'../../assets/img/LaNocheMasLarga/LaNoche-CoverEstreno.jpg',    
    

    imagesUrlCover: '../../assets/img/LaNocheMasLarga/LaNoche-Cover.jpg',
    ratingMovieINCAA: 'atp',
    publiclyVisible: true,
    awardsWon: [{ name: 'Goya', year: '2019' }],
    castMovie: [
      {
        id: 1,
        firstname: 'actor1',
        lastname: 'apellido-actor1',
        rol: { id: 1, name: 'Actor' },
      },
    ],
    technicalTeam: [
      {
        id: 1,
        firstname: 'actor1',
        lastname: 'apellido-actor1',
        rol: { id: 1, name: 'Actor' },
      },
    ],
    origilaFormat: 'Formato original',
    genero: { id: 1, nombre: 'Drama' },
    isPremiere: false
  },

];
