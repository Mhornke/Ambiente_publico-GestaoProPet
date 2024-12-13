'use client'
import { FiltrosPesquisa } from "@/components/InputPesquisa"
import { ItemAnimais } from "@/components/ItemAnimais";
import { AnimalI } from "@/utils/types/animais";
import { useEffect, useState } from "react";
import { Toaster } from 'sonner';



export default function Home() {
  const [animais, setAnimais] = useState<AnimalI[]>([])
  

  useEffect(() => {
     

    async function buscaDados() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/animais`)
      const dados = await response.json()
     
      setAnimais(dados)
    }
    buscaDados()
  }, [])
  

  const listaAnimais = 
  Array.isArray(animais) && animais.length > 0 ?(
    animais.map(animal => (
    <ItemAnimais data={animal} key={animal.id} />
  ))
) : (
  <p> Nenhum animal encontrado.</p>
)


  return (
    <main>
      <FiltrosPesquisa setAnimais={setAnimais} />

      <section className="max-w-screen-xl mx-auto flex flex-col items-center sm:block">
        <h1 className="mb-5 mt-3 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-gray-900">
          Seu<span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          .Pet </span>
          <span className="text-lg font-semibold no-underline text-gray-900 dark:text-gray-900">
             - Seu novo amigo está à sua espera</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {listaAnimais}
        </div>

      </section>
      <Toaster position="top-right" richColors />
    </main>

  );
}
