export class Usuario {
  id: number | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  password: string | undefined;
  email: string | undefined;
  profile!: string;

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
    return this.firstName;
  }
}

export const usuarios: Usuario[] = [
];
