import PropTypes from "prop-types";
import Paciente from "./Paciente";

const Listadopacientes = ({ pacientes }) => {
   console.log(pacientes);
   return (
      <>
         <div className='md:w-1/2 lg:w-3/5 '>
            {pacientes.length === 0 ? (
               <>
                  <h2 className='font-black text-3xl text-center text-red-500'>
                     No hay pacientes!
                  </h2>
                  <p className='text-xl mt-5 mb-10 text-center'>
                     Agrega nuevos{" "}
                     <span className='text-red-800 font-bold'>
                        Pacientes y citas en tu registro :D !
                     </span>
                  </p>
               </>
            ) : (
               <>
                  <h2 className='font-black text-3xl text-center'>
                     Listadopacientes
                  </h2>
                  <p className='text-xl mt-5 mb-10 text-center'>
                     Administra tus{" "}
                     <span className='text-indigo-500 font-bold'>
                        Pacientes y citas
                     </span>
                  </p>
               </>
            )}

            <div className='m-0 p-0 md:h-screen overflow-y-scroll'>
               {pacientes.map((paciente) => (
                  <Paciente key={paciente.propietario} paciente={paciente} />
               ))}
            </div>
         </div>
      </>
   );
};

Listadopacientes.propTypes = {};

export default Listadopacientes;
