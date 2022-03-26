import PropTypes from "prop-types";
import Pacientes from "./Pacientes";

const Listadopacientes = ({ citas }) => {
   return (
      <>
         <div className='md:w-1/2 lg:w-3/5 '>
            <h2 className='font-black text-3xl text-center'>
               Listadopacientes
            </h2>
            <p className='text-xl mt-5 mb-10 text-center'>
               Administra tus{" "}
               <span className='text-indigo-500 font-bold'>
                  Pacientes y citas
               </span>
            </p>
            <div className='m-0 p-0 md:h-screen overflow-y-scroll'>
               {citas.map((datoCita) => {
                  return <Pacientes key={datoCita.alta} {...datoCita} />;
               })}
            </div>
         </div>
      </>
   );
};

Listadopacientes.propTypes = {};

export default Listadopacientes;
