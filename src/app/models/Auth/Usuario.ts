export class Usuario {
  id: number | undefined;
  nombre: string | undefined;
  apellido: string | undefined;
  contrasenia: string | undefined;
  email: string | undefined;
  role!: string;
}

export const usuarios: Usuario[] = [
  {
    id: 1,
    nombre: 'Maximiliano',
    apellido: 'El apellido mas largo',
    contrasenia: 'admin',
    email: 'admin@admin.com',
    role: 'Admin'
  },
];
