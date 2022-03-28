import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Formulario from "./components/Formulario";
import HeaderApp from "./components/HeaderApp";
import Listadopacientes from "./components/Listadopacientes";

import "react-toastify/dist/ReactToastify.min.css";

function App() {
   const [pacientes, setPacientes] = useState([]);
   return (
      <div className='container mx-auto mt-20'>
         <HeaderApp />
         <div className='mt-12 md:flex'>
            <ToastContainer />
            <Formulario pacientes={pacientes} setPacientes={setPacientes} />
            <Listadopacientes />
         </div>
      </div>
   );
}

export default App;
