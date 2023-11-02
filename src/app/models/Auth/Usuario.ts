import { Profile } from "./profile";

export class Usuario {
  id?: number;
  firstName: string | undefined;
  lastName: string | undefined;
  password?: string;
  email: string | undefined;
  profile!: Profile;

  get _firstName(){
    return this.firstName;
  }
  get _lastNAme(){
    return this.lastName;
  }
  get _password(){
    return this.password;
  }
  get _email(){
    return this.email;
  }
  get _profile(){
    return this.profile;
  }
  get _nameProfile(){
    return this.profile._name;
  }
}


export const usuarios: Usuario[] = [
];
