import { useEffect, useState } from "react";
import CardCategoria from "../cardcategoria/CardCategoria";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Services";

function ListaCategoria(props: { limite?: number }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    buscarCategoria();
  }, [categorias.length]);

  async function buscarCategoria() {
    try {
      setIsLoading(true);
      await buscar("/categorias", setCategorias);
    } catch (error: any) {
      alert("Erro ao carregar categorias!");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && (
        <div className="flex justify-center w-full my-8">
          <img
            src="https://cdn.pixabay.com/animation/2023/01/10/19/32/19-32-56-824_512.gif"
            width={200}
          ></img>
        </div>
      )}

      <div className="flex justify-center w-full my-4 h-fit">
        <div className="container flex flex-col">
          {!isLoading && categorias.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhum tema foi encontrado!
            </span>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-fit">
            {categorias.map((categoria, index) => {
              if (props.limite && index <= props.limite) {
                return (
                  <CardCategoria key={categoria.id} categoria={categoria} />
                );
              }

              if (!props.limite) {
                return (
                  <CardCategoria key={categoria.id} categoria={categoria} />
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategoria;
