import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div
        className="w-full flex justify-center py-4
            			   bg-green-950 text-amber-100">
        <div className="container flex justify-between text-lg mx-8">

            <Link to="/home"
            className="text-2xl font-mono text-amber-800 hover:text-lime-600 transition-all ">
            Brechó ZL</Link>
          
            <div className="flex gap-20 items-center">
              <Link
                to="/categoria"
                className="text-2xl font-mono text-amber-800 hover:text-lime-600 transition-all ">
                Categoria
              </Link>
              
              <Link to="/cadastrar"
              className="text-2xl font-mono text-amber-800 hover:text-lime-600 transition-all"
              >Cadastrar</Link>
            </div>

        </div>
      </div>
    </>
  );
}

export default Navbar;
