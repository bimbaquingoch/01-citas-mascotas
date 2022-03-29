import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {
   const [mascota, setMascota] = useState("");
   const [propietario, setPropietario] = useState("");
   const [email, setEmail] = useState("");
   const [alta, setAlta] = useState("");
   const [sintomas, setSintomas] = useState("");

   useEffect(() => {
      if (Object.keys(paciente).length > 0);
      {
         setMascota(paciente.mascota);
         setPropietario(paciente.propietario);
         setEmail(paciente.email);
         setAlta(paciente.alta);
         setSintomas(paciente.sintomas);
      }
   }, [paciente]);

   const generarId = () => {
      const fecha = Date.now().toString(36);
      const hash = Math.random().toString(36).substr(2);
      return fecha + hash;
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      if (
         [mascota, propietario, email, alta, sintomas].includes("") ||
         [mascota, propietario, email, alta, sintomas].includes()
      ) {
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

      // objeto de paciente
      const objetoPaciente = {
         mascota,
         propietario,
         email,
         alta,
         sintomas,
      };

      if (paciente.id) {
         // ("editando");
         objetoPaciente.id = paciente.id;
         const actualizado = pacientes.map((pacienteState) =>
            pacienteState.id === paciente.id ? objetoPaciente : pacienteState
         );

         setPacientes(actualizado);
         setPaciente({});
      } else {
         // ("nuevo registro");
         objetoPaciente.id = generarId();
         setPacientes([...pacientes, objetoPaciente]);
      }

      // reiniciar el form
      setMascota("");
      setPropietario("");
      setEmail("");
      setAlta("");
      setSintomas("");
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
                  onChange={(e) => setMascota(e.target.value)}
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
                  onChange={(e) => setPropietario(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setAlta(e.target.value)}
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
                  onChange={(e) => setSintomas(e.target.value)}
                  cols='30'
                  placeholder='Describe los sintomas del paciente ...'
                  rows='5'></textarea>
            </div>

            <input
               className='cursor-pointer rounded-md shadow-md bg-indigo-500 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 transition-all'
               type='submit'
               value={paciente.id ? "Editar Paciente" : "Agregar paciente"}
            />
         </form>
      </div>
   );
};

Formulario.propTypes = {
   setPacientes: PropTypes.func.isRequired,
   setPaciente: PropTypes.func.isRequired,
   paciente: PropTypes.object.isRequired,
   pacientes: PropTypes.array.isRequired,
};

export default Formulario;
