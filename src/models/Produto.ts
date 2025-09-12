import type Categoria from "./Categoria";

export default interface Produtos{
  id: number;
  descricao: string;
  nome: string;
  codigoBarra: string;
  estoque: number;
  dataSaida: string;
  categoria: Categoria;
  dataEntrada: number;
}