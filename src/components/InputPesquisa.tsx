import { AnimalI } from "@/utils/types/animais";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { EspecieI } from "@/utils/types/especies";
type Inputs = {
  genero: string;
  especie: string;
  porte: string;
};

type InputPesquisaProps = {
  setAnimais: React.Dispatch<React.SetStateAction<AnimalI[]>>;
};

export function FiltrosPesquisa({ setAnimais }: InputPesquisaProps) {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [especie, setEspecie] = useState<EspecieI[]>([])

  useEffect(() => {

    async function getEspecies() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/especies`)
      const dados = await response.json()
      console.log(dados);

      setEspecie(dados)
    }
    getEspecies()

  }, [])

  const optionsEspecies = especie.map(especie => (
    <option key={especie.id} value={especie.id}>{especie.nome}</option>
  ))
  
  async function enviaPesquisa(data: Inputs) {
    console.log(data);
    if (!data.genero && !data.especie && !data.porte) {
      toast.warning("Escolha pelo menos um filtro!");
      return;
    }

    const params = new URLSearchParams();
    if (data.genero) params.append("genero", data.genero);
    if (data.especie) params.append("especie", data.especie);
    if (data.porte) params.append("porte", data.porte);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/animais/pesquisa?${params.toString()}`
    );
    const dados = await response.json();

    if (dados.length === 0) {
      toast.error("Não há animais com o termo pesquisado!");
      reset({ genero: "", especie: "", porte: "" });
      return;
    }

    setAnimais(dados);
  }

  async function mostraDestaques() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/animais`);
    const dados = await response.json();
    setAnimais(dados);
    reset({ genero: "", especie: "", porte: "" });
  }

  return (
    <section className="flex flex-col sm:flex-row max-w-5xl mx-auto mt-3 items-center">
      <form className="flex-1 flex gap-4" onSubmit={handleSubmit(enviaPesquisa)}>
        <div className="flex flex-col ml-4">
          <label className="mb-1 text-sm font-medium text-gray-900">Gênero</label>
          <select
            className="p-2 border rounded w-20 sm:w-full"
            {...register("genero")}
          >
            <option value="">Selecione um Gênero</option>
            <option value="Macho">Macho</option>
            <option value="Femea">Fêmea</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-900">Espécie</label>
          <select
            className="p-2 border rounded  w-20 sm:w-full"
            id="especie"
            {...register("especie")}
          >
            <option value="">Selecione uma Espécie</option>
            {optionsEspecies}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-900">Porte</label>
          <select
            className="p-2 border rounded  w-20 sm:w-full"
            {...register("porte")}
          >
            <option value="">Selecione um Porte</option>
            <option value="P">Muito Pequeno</option>
            <option value="PP">Pequeno</option>
            <option value="M">Médio</option>
            <option value="G">Grande</option>
            <option value="GG">Muito Grande</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-purple-700 hover:bg-blue-800 text-white p-2 px-10 sm:px-20 rounded self-end"
        >
          Filtrar
        </button>
      </form>

      <button
        type="button"
        className="ms-3 mt-9 px-28 focus:outline-none text-white bg-slate-300 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm sm:px-5 py-2.5 mb-2"
        onClick={mostraDestaques}
      >
        Animais em Destaque
      </button>
    </section>
  );
}