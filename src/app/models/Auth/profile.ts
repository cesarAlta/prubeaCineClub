export class Profile {
  id?: number;
  name!: string;

  constructor(name: string, id?: number) {
    this.id = id;
    this.name = name;
  }
  get _id() {
    return this.id;
  }
  get _name() {
    return this.name;
  }
}
export const profiles: Profile[] = [
  new Profile('Admin', 1),
  new Profile('User', 2),
  new Profile('Invitado', 3),
];
