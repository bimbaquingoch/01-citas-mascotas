import React from "react";
import PropTypes from "prop-types";

const Pacientes = (props) => {
   return (
      <div className='bg-white mt-0 mx-5 mb-5 shadow-md rounded-md px-5 py-10'>
         <p className='font-bold mb-3 text-gray-700 uppercase'>
            Nombre: <span className='font-normal normal-case'>Hook</span>
         </p>
         <p className='font-bold mb-3 text-gray-700 uppercase'>
            Propietario: <span className='font-normal normal-case'>Bryan</span>
         </p>
         <p className='font-bold mb-3 text-gray-700 uppercase'>
            Email: <span className='font-normal normal-case'>Hook</span>
         </p>
         <p className='font-bold mb-3 text-gray-700 uppercase'>
            Fecha Alta: <span className='font-normal normal-case'>Hook</span>
         </p>
         <p className='font-bold mb-3 text-gray-700 uppercase'>
            Síntomas:{" "}
            <span className='font-normal normal-case'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
               nisi, voluptatum quae obcaecati cupiditate voluptas commodi quam
               quibusdam ratione voluptatem dignissimos corrupti, eligendi
               consequuntur saepe eaque earum. Alias, distinctio consectetur!
            </span>
         </p>
      </div>
   );
};

Pacientes.propTypes = {};

export default Pacientes;
