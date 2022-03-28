import PropTypes from "prop-types";

const Pacientes = () => {
   // const { mascota, alta, propietario, sintomas, email } = datoCita;
   return (
      <div className='bg-white mt-0 mx-5 mb-5 shadow-md rounded-md px-5 py-10'>
         <p className='font-bold mb-3 text-gray-700 uppercase'>
            Nombre: <span className='font-normal normal-case'>{""}</span>
         </p>
         <p className='font-bold mb-3 text-gray-700 uppercase'>
            Propietario: <span className='font-normal normal-case'>{""}</span>
         </p>
         <p className='font-bold mb-3 text-gray-700 uppercase'>
            Email: <span className='font-normal normal-case'>{""} </span>
         </p>
         <p className='font-bold mb-3 text-gray-700 uppercase'>
            Fecha Alta: <span className='font-normal normal-case'>{""}</span>
         </p>
         <p className='font-bold mb-3 text-gray-700 uppercase'>
            Síntomas: <span className='font-normal normal-case'>{""}</span>
         </p>

         <div className='flex justify-around mt-5'>
            <button
               className='py-3 px-10 bg-indigo-600 rounded-md text-white font-bold hover:bg-indigo-800 uppercase transition-colors'
               // onClick={() => setPaciete(datoCita)}
               type='button'>
               Editar
            </button>
            <button
               className='py-3 px-10 bg-red-600 rounded-md text-white font-bold hover:bg-red-800 uppercase transition-colors'
               type='button'>
               Eliminar
            </button>
         </div>
      </div>
   );
};

Pacientes.propTypes = {};

export default Pacientes;
