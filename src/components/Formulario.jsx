import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Formulario = ({ crearCita }) => {
   const generarId = () => {
      const fecha = Date.now().toString(36);
      const hash = Math.random().toString(36).substr(2);
      return fecha + hash;
   };

   const initialCitas = {
      mascota: "",
      propietario: "",
      email: "",
      alta: "",
      sintomas: "",
   };

   const [cita, setCita] = useState(initialCitas);

   const handleInputChange = (e) => {
      setCita({ ...cita, [e.target.name]: e.target.value, id: generarId() });
   };

   const { mascota, propietario, email, alta, sintomas } = cita;

   const handleSubmit = (e) => {
      e.preventDefault();

      if ([mascota, propietario, email, alta, sintomas].includes("")) {
         toast.error("llene todos los campos");
         return;
      }

      if (mascota.trim().length <= 2 || propietario.trim().length <= 2) {
         toast.error(
            `nombre de mascota o propietario muy cortos, mínimo 3 letras`
         );
         return;
      }

      toast.success(`Paciente: ${mascota.toUpperCase()} creado exitosamente`);

      crearCita(cita);
      setCita(initialCitas);
   };

   return (
      <div className='md:w-1/2 lg:w-2/5'>
         <h2 className='font-black text-3xl text-center'>
            Seguimiento Pacientes
         </h2>
         <p className='text-lg mt-5 text-center'>
            Añade pacientes y{" "}
            <span className='text-indigo-500 font-bold'>Administralos</span>
         </p>
         <form
            className='bg-white shadow-md rounded-lg py-10 px-5 mx-5 mt-5 md:mt-10 mb-10'
            action=''
            onSubmit={handleSubmit}>
            <div className='mb-5'>
               <label
                  className='block text-gray-700 uppercase font-bold'
                  htmlFor='mascota'>
                  Nombre Mascota:
               </label>
               <input
                  className='border-2 w-full p-2 mt-2 placeholder-purple-300 rounded-md'
                  id='mascota'
                  name='mascota'
                  placeholder='Nombre de la mascota'
                  type='text'
                  value={mascota}
                  onChange={handleInputChange}
               />
            </div>

            <div className='mb-5'>
               <label
                  className='block text-gray-700 uppercase font-bold'
                  htmlFor='propietario'>
                  Nombre Propietario
               </label>
               <input
                  className='border-2 w-full p-2 mt-2 placeholder-purple-300 rounded-md'
                  id='propietario'
                  name='propietario'
                  placeholder='Nombre del propietario'
                  type='text'
                  value={propietario}
                  onChange={handleInputChange}
               />
            </div>

            <div className='mb-5'>
               <label
                  className='block text-gray-700 uppercase font-bold'
                  htmlFor='email'>
                  Email
               </label>
               <input
                  className='border-2 w-full p-2 mt-2 placeholder-purple-300 rounded-md'
                  id='email'
                  name='email'
                  placeholder='email contacto propietario'
                  type='email'
                  value={email}
                  onChange={handleInputChange}
               />
            </div>

            <div className='mb-5'>
               <label
                  className='block text-gray-700 uppercase font-bold'
                  htmlFor='alta'>
                  Alta
               </label>
               <input
                  className='border-2 w-full p-2 mt-2 placeholder-purple-300 rounded-md'
                  id='alta'
                  name='alta'
                  type='date'
                  value={alta}
                  onChange={handleInputChange}
               />
            </div>

            <div className='mb-5'>
               <label
                  className='block text-gray-700 uppercase font-bold'
                  htmlFor='sintomas'>
                  Síntomas
               </label>
               <textarea
                  className='border-2 w-full p-2 mt-2 placeholder-purple-300 rounded-md'
                  name='sintomas'
                  id='sintomas'
                  value={sintomas}
                  onChange={handleInputChange}
                  cols='30'
                  placeholder='Describe los sintomas del paciente ...'
                  rows='10'></textarea>
            </div>

            <input
               className='cursor-pointer rounded-md shadow-md bg-indigo-500 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 transition-all'
               type='submit'
               value='Agregar paciente'
            />
         </form>
      </div>
   );
};

Formulario.propTypes = {};

export default Formulario;
