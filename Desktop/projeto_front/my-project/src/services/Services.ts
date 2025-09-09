import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5137/" // Ajuste se sua API estiver em outra porta
});

export const buscar = async (url: string, setDado: Function) => {
  const resposta = await api.get(url);
  setDado(resposta.data);
};

export const cadastrar = async (url: string, dado: Object, setDado: Function) => {
  const resposta = await api.post(url, dado);
  setDado(resposta.data);
};

export const atualizar = async (url: string, dado: Object, setDado: Function) => {
  const resposta = await api.put(url, dado);
  setDado(resposta.data);
};

export const deletar = async (url: string) => {
  await api.delete(url);
};
