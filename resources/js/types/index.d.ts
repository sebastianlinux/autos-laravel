import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};

export interface Carro {
    id: number;
    marca: string;
    modelo: string;
    año: number;
    color: string;
    precio: number;
    created_at?: string;
    updated_at?: string;
}

export interface PageProps {
    auth: {
        user: {
            id: number;
            name: string;
            email: string;
        } | null;
    };
    carros?: Carro[]; // Para la página Index
    carro?: Carro;   // Para las páginas Show, Edit
    errors?: {        // Para los formularios Create y Edit
        marca?: string;
        modelo?: string;
        año?: string;
        color?: string;
        precio?: string;
    };
    success?: string; // Para mensajes de éxito
}