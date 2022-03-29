import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Formulario from "./components/Formulario";
import HeaderApp from "./components/HeaderApp";
import Listadopacientes from "./components/Listadopacientes";

import "react-toastify/dist/ReactToastify.min.css";

function App() {
   // listado de pacientes
   const [pacientes, setPacientes] = useState([]);
   // un solo paciente
   const [paciente, setPaciente] = useState({});

   const eliminarPaciente = (id) => {
      const pacientesActualizados = pacientes.filter(
         (paciente) => paciente.id !== id
      );
      setPacientes(pacientesActualizados);
   };

   return (
      <div className='container mx-auto mt-20'>
         <HeaderApp />
         <div className='mt-12 md:flex'>
            <ToastContainer draggablePercent={60} draggableDirection='y' />
            <Formulario
               pacientes={pacientes}
               setPacientes={setPacientes}
               paciente={paciente}
               setPaciente={setPaciente}
            />
            <Listadopacientes
               pacientes={pacientes}
               setPaciente={setPaciente}
               eliminarPaciente={eliminarPaciente}
            />
         </div>
      </div>
   );
}

export default App;
