import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { useEffect, useState } from "react";
import { buscar, deletar } from "../../../services/Services";

function DeletarCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      alert("Erro ao buscar categoria por ID!");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarCategoria() {
    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`);
      alert("Categoria apagada com sucesso.");
    } catch (error: any) {
      alert("Erro ao deletar a categoria.");
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categoria");
  }

  return (
    <>
      <div className="container w-1/3 mx-auto">
        <h1 className="text-4xl text-center my-4 text-amber-100"> Deletar tema </h1>
        <p className="text-center font-mono mb-4 text-amber-100">

          Você tem certeza de que deseja apagar o tema a seguir?
        </p>
        <div className="border-none flex flex-col rounded-2xl overflow-hidden justify-between">
          <header className="py-2 px-6 bg-green-600 font-mono text-2xl">

            {categoria.nome}
          </header>
          <p className="p-8 text-3xl bg-green-600 text-amber-100 h-full">

            {categoria.descricao}
          </p>
          <div className="flex">
            <button
              className="text-amber-100 bg-amber-950 font-mono w-full flex items-center justify-center cursor-pointer "
              onClick={retornar}
            >
              Não
            </button>
            <button
              className="w-full text-amber-100 bg-amber-950  font-mono flex items-center justify-center py-2 cursor-pointer"
              onClick={deletarCategoria}
            >
              {isLoading ? (
                <img src="" width={35}></img>
              ) : (
                <span> Sim </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeletarCategoria;
