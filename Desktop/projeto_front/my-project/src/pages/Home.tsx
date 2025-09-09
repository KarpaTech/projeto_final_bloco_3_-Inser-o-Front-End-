function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-900 text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
        Brechó ZL<br />
        Seja bem vinda(o)!
      </h1>

      <button className="border border-white rounded-lg px-6 py-3 mb-6 hover:bg-white hover:text-indigo-900 transition">
        Nova Categoria
      </button>

      <img
        src="https://agencianovofoco.com.br/wp-content/uploads/2024/11/a-importancia-do-marketing-digital-para-lojas-de-roupas-vintage-e-brechos.jpeg"
        alt="Loja de roupas"
        className="w-full max-w-[800px] rounded-xl shadow-lg hover:scale-105 transition"
      />
    </div>
  );
}

export default Home;
