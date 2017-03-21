import { IRole } from './role.interface';

export class Role implements IRole {
    id: number;
    name: string;
    contact: string;
    email: string;
    sponsor: number;
    deleted: boolean;
}