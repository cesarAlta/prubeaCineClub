import { ICalificacion } from "./IClasificacion";
import { IGenero } from "./IGenero";
import { IPremio } from "./IPremio";
import { IRol } from "./IRol";

export interface IPelicula{
    nombre: string;
    anioEstreno:number;
    sinopsis: string;
    duracion: number;
    generos:[IGenero]
    pais:string,
    idioma:string;
    premios: [IPremio];
    elenco: [IRol];
    soporte: string;
    calificacion: ICalificacion;
    linkTrailer: string;
    linkPelicula:string;
    linkPoster:string;
    linkEstreno:string;
    oculta:boolean;
    estreno:boolean;
}