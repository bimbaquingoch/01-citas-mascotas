import React from "react";
import PropTypes from "prop-types";

const Pacientes = ({ mascota, alta, propietario, sintomas, email }) => {
   return (
      <div className='bg-white mt-0 mx-5 mb-5 shadow-md rounded-md px-5 py-10'>
         <p className='font-bold mb-3 text-gray-700 uppercase'>
            Nombre: <span className='font-normal normal-case'>{mascota}</span>
         </p>
         <p className='font-bold mb-3 text-gray-700 uppercase'>
            Propietario:{" "}
            <span className='font-normal normal-case'>{propietario}</span>
         </p>
         <p className='font-bold mb-3 text-gray-700 uppercase'>
            Email: <span className='font-normal normal-case'>{email} </span>
         </p>
         <p className='font-bold mb-3 text-gray-700 uppercase'>
            Fecha Alta: <span className='font-normal normal-case'>{alta}</span>
         </p>
         <p className='font-bold mb-3 text-gray-700 uppercase'>
            Síntomas:{" "}
            <span className='font-normal normal-case'>{sintomas}</span>
         </p>
      </div>
   );
};

Pacientes.propTypes = {};

export default Pacientes;
