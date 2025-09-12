function Home() {
  return (
    <>
      <div className="h-[85vh] bg-cover bg-[url(https://agencianovofoco.com.br/wp-content/uploads/2024/11/a-importancia-do-marketing-digital-para-lojas-de-roupas-vintage-e-brechos.jpeg)] backdrop-blur-xl flex justify-center w-full">
        <div className="container grid grid-cols-1 text-amber-100">
          <div className="flex flex-col gap-4 items-center justify-center py-4">

            <div className=" flex justify-around gap-4">
              <div className="flex justify-center">
                <div className="flex justify-around gap-4">
                  {/* <div
                    className="rounded text-white items-center flex  border-solid border-2 py-2 px-4"
                  >
                   <p className="border-b-green-900" > Nova Postagem </p> 
                  </div> */}
                </div>
              </div>

              <div className="flex justify-center ">
                <img
                  src="https://agencianovofoco.com.br/wp-content/uploads/2024/11/a-importancia-do-marketing-digital-para-lojas-de-roupas-vintage-e-brechos.jpeg"
                  alt="Imagem Página Home"
                  className="w-[80%] shadow-2xl rounded-4xl hover:w-[100%] transition-all ease-in-out "
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;

