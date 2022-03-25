import Formulario from "./components/Formulario";
import HeaderApp from "./components/HeaderApp";
import Listadopacientes from "./components/Listadopacientes";

function App() {
   return (
      <div className='container mx-auto mt-20'>
         <HeaderApp />
         <div className='mt-12 md:flex'>
            <Formulario />
            <Listadopacientes />
         </div>
      </div>
   );
}

export default App;
