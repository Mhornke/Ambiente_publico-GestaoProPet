import { AnimalI } from "@/utils/types/animais";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faRuler, faScissors, faScaleUnbalanced } from '@fortawesome/free-solid-svg-icons';
import { CakeIcon } from '@heroicons/react/24/outline';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

// Função para escolher o ícone de sexo
export const iconeSexo = (sexo: string) => {
    switch (sexo) {
        case 'Macho':
            return <FontAwesomeIcon icon={faMars} className="w-5 h-5 mr-2 text-blue-500" />;
        case 'Femea':
            return <FontAwesomeIcon icon={faVenus} className="w-5 h-5 mr-2 text-pink-500" />;
        default:
            return null;
    }
};
export const Castracao = (castrado: string) => {
    switch (castrado) {
        case 'Nao':
            return 'Não Castrado';
        case 'Pelo_Abrigo':
            return "Pelo Abrigo"
        case 'Ja_Veio_Castrado':
            
            return "Entrou Castrado";
        default:
            return null;
    }
}

export function ItemAnimais({ data }: { data: AnimalI }) {
    console.log(data.castrado);
    
    return (
        <div className="max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={`/Adocao?animalId=${data.id}`}>
                <div className="w-full h-80 overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src={data.foto}
                        alt={`Imagem do ${data.especie} ${data.nome}`}
                        width={200}
                        height={300}
                        
                    />
                </div>
            </Link>

            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.nome}
                </h5>
                <div className="flex justify-around">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center">
                        <FontAwesomeIcon icon={faPaw} className="w-5 h-5 mr-2 text-gray-500" />
                        {data.especie}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center">
                        <FontAwesomeIcon icon={faRuler} className="w-5 h-5 mr-2 text-gray-500" />
                        {data.porte}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center">
                        <FontAwesomeIcon icon={faScaleUnbalanced} className="w-5 h-5 mr-2 text-gray-500" />
                        {data.peso}
                    </p>
                </div>

                <div className="flex justify-between mr-5 ml-5">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center">
                        {iconeSexo(data.genero)}
                        <span>{data.genero}</span>
                    </p>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">
                        <FontAwesomeIcon icon={faScissors} className="w-5 h-5 mr-2 text-gray-500" />
                        {Castracao(data.castrado)}
                    </p>
                </div>
                <Link href={`/Adocao?animalId=${data.id}&animalNome=${encodeURIComponent(data.nome)}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Conhecer melhor
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}