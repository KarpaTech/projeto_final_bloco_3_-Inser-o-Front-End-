import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Services";

function FormCategoria() {
	const navigate = useNavigate();

	const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const { id } = useParams<{ id: string }>();

	async function buscarPorId(id: string) {
		try {
			await buscar(`/categorias/${id}`, setCategoria);
		} catch (error: any) {
			alert("Erro ao buscar a categoria pelo ID!");
		}
	}

	useEffect(() => {
		if (id !== undefined) {
			buscarPorId(id);
		}
	}, [id]);

	function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		setCategoria({
			...categoria,
			[e.target.name]: e.target.value,
		});
	}

	function retornar() {
		navigate("/categoria");
	}

	async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsLoading(true);

		if (id !== undefined) {
			try {
				await atualizar(`/categorias`, categoria, setCategoria);
				alert("Categoria atualizada com sucesso!");
			} catch (error: any) {
				alert("Erro ao atualizar categoria!");
			}
		} else {
			try {
				await cadastrar(`/categorias`, categoria, setCategoria);
				alert("Categoria cadastrada com sucesso!");
			} catch (erro: any) {
				alert("Erro ao cadastrar a categoria!");
			}
			navigate('/categoria')
		}

		setIsLoading(false);
		retornar();
	}

	return (// rounded arredonda as pontas, px modifica os lados, py modifica a altura
		<div className="w-fit px-30 py-15 rounded-2xl m-5 flex flex-col items-center justify-center mx-auto bg-green-200 ">
			<h1 className="text-black font-mono text-4xl text-center my-8">{id === undefined ? "Cadastrar Tema" : "Editar Tema"}</h1>

			<form className="text-black flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
				<div className="flex flex-col gap-2">
					<label htmlFor="categoria_nome" className="font-mono">
						Nome da Categoria
					</label>
					<input // campo de texto
						type="text"
						placeholder="Descreva aqui seu tema"
						name="categoria_nome"
						required
						className="border-2 border-black rounded-xl p-2 text-black w-[45vw] h-[10vw] "
						value={categoria.nome}
						onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
					/>

					<label htmlFor="descricao" className="mask-linear-from-neutral-950">
						Descrição da categoria
					</label>
					<textarea
						placeholder="Descreva aqui seu tema"
						name="descricao"
						required
						className="border-2 border-black rounded-xl p-2 text-black "
						value={categoria.descricao}
						onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstado(e)}
					/>

                    <label htmlFor="texto" className="font-mono">
						Texto da categoria
					</label>
					<textarea
						placeholder="Texto do tema"
						name="texto"
						required
						className="border-2 border-black rounded-xl p-2 text-black "
						value={categoria.texto}
						onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstado(e)}
					/>

				</div>
				<button
					className="rounded-xl text-white bg-black w-1/2 py-2 flex justify-center "
					type="submit">
					{isLoading ? <img src="https://cdn.pixabay.com/animation/2023/01/10/19/32/19-32-56-824_512.gif" width={35}></img> : <span> {id === undefined ? "Cadastrar" : "Atualizar"} </span>}
				</button>
			</form>
		</div>
	);
}

export default FormCategoria;
