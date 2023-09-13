import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Usuario, usuarios } from 'src/app/models/Auth/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 
  

  constructor() { }
 
  get(email:string, pass:string){
    return of(usuarios.find(u=> u.email==email && u.contrasenia==pass))
 } 
 post(copyform: Usuario) {
    usuarios.push(copyform);
    return of<Usuario>(copyform)
  }
   postRecover(value: string) {
   return of(usuarios.find(u=> u.email==value))
  }
}
