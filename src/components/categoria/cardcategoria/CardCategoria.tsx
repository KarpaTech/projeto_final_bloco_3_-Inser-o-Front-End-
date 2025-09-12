import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="border-none flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="text-amber-100 py-2 px-6 bg-green-900 font-mono text-xl">
        {categoria.nome}
      </header>
      <main className="bg-blue-200 flex flex-col p-4 gap-3 text-lg h-full justify-around">
        <p className="">
          <span className="font-mono"> Descrição: </span> {categoria.descricao}
        </p>
        <p>
          <span className="font-mono"> Texto: </span> {categoria.texto}
        </p>
        <p>
          Data:{" "}
          {new Intl.DateTimeFormat("pt-BR", {
            dateStyle: "full",
            timeStyle: "medium",
          }).format(new Date(categoria.data))}
        </p>
      </main>

      <div className="flex">
        <Link
          to={`/cadastrar/${categoria.id}`}
          className="w-full text-amber-100 bg-amber-900 font-mono flex items-center justify-center py-2 cursor-pointer "
        >
          <button> Editar </button>
        </Link>

        <Link
          to={`/deletar/${categoria.id}`}
          className="text-amber-100 bg-green-600 w-full flex items-center justify-center cursor-pointer "
        >
          <button> Deletar </button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
