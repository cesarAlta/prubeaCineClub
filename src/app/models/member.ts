import {Rol} from './Rol'

export class Member{
    id :number|undefined;
    firstname: string|undefined;
    lastname:string|undefined;
    rol: Rol | undefined;
}

export const members: Member[]=[
{id:1,firstname:'Jose', lastname:'Sanchez', rol: {id:1, name:'Actor'}},
{id:1,firstname:'Luis', lastname:'Ttito', rol: {id:1, name:'Actor'}},
{id:1,firstname:'Marcos', lastname:'Aurelio', rol: {id:1, name:'Actor'}},
{id:1,firstname:'Lola', lastname:'Mir', rol: {id:2, name:'Director'}},
]