"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import WhatsAppButton from "./Formulario/enviaWhats";

export default function Detalhes() {
  const [descricao, setDescricao] = useState("");
  const [loading, setLoading] = useState(false);
  const [animalId, setAnimalId] = useState<number>(0);
  const [nomeAnimal, setNomeAnimal] = useState<string>(""); 
  const router = useRouter();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("animalId");
    const nome = queryParams.get("animalNome");
    if (id) {
      setAnimalId(Number(id));
      setNomeAnimal(String(nome));  
    }
  }, []);
  
  console.log("id animal ", animalId);
  console.log("nome animal ", nomeAnimal);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Aqui você pode colocar a lógica de envio do formulário
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Formulário de Adoção</h2>
      <form onSubmit={handleSubmit}>
        <p className="mb-4 block text-gray-700">
          Em poucas palavras, diga se você já tem animais e porque gostaria de adotar este animal. Em breve entraremos em contato.
        </p>

        <div className="mb-4">
          <label className="block text-gray-700">Pedido:</label>
          <textarea
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Insira aqui seu pedido de adoção..."
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)} 
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-blue-600"
          disabled={loading}
        >
          <WhatsAppButton animalId={animalId} nomeAnima={nomeAnimal} />
        </button>
      </form>
    </div>
  );
}
