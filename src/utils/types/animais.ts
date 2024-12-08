import { FotoI } from "@/utils/types/fotos";

export interface AnimalI {
    id: number;
    nome: string;
    especie: string;
    porte: string;
    peso: string;
    genero: string;
    castrado: string;
    foto: string;
    fotos: FotoI[]; // Agora 'fotos' é um array do tipo FotoI
}
