// function Navbar() {
//   return (
//     <>
//       <div
//         className="w-full flex justify-center py-4
//             			   bg-indigo-900 text-white"
//       >
//         <div className="container flex justify-between text-lg mx-8">
//           Brechó ZL
//           <div className="flex gap-4">Categoria</div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-(--primary) text-white">
        <div className="container flex justify-between text-lg">
          <h1 className="font-bold">Brechó ZL</h1>
          <div className="flex gap-4">Lista Cadastro Categorias</div>
          <Link to="/">
            <h1 className="font-bold">Brechó ZL</h1>
          </Link>
          <div className="flex gap-4">
            <Link to="/categorias"> Lista de Categorias </Link>
            <Link to="/categorias/cadastro"> Cadastro </Link>
          </div>
        </div>
      </div>
    </>
  );
}
