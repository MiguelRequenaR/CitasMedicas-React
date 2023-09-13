
const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h1 className="font-black text-3xl text-center">
            Seguimiento paciente
        </h1>
        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {""}
            <span className="text-indigo-600 font-bold">
                Administralos
            </span>
        </p>
        <form action="" className="bg-white shadow-lg rounded-lg py-10 px-5 mb-10">
            <div className="mb-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="nombre">Nombre Paciente</label>
                <input 
                    id="nombre"
                    type="text" 
                    placeholder="Nombre del paciente"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>
            <div className="mb-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="direccion">Dirección del Paciente</label>
                <input 
                    id="direccion"
                    type="text" 
                    placeholder="Dirección del paciente"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>
            <div className="mb-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email del Paciente</label>
                <input 
                    id="email"
                    type="text" 
                    placeholder="Email del paciente"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>
            <div className="mb-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="fecha">Fecha</label>
                <input 
                    id="fecha"
                    type="date" 
                    placeholder="del paciente"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>
            <div className="mb-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas del Paciente</label>
                <input 
                    id="sintomas"
                    type="text" 
                    placeholder="Sintomas del paciente"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>
            <input 
                type="submit" 
                className="bg-indigo-600 w-full p-3 text-white font-bold rounded-lg hover:bg-indigo-700 cursor-pointer uppercase transition-all"
                value="Agregar paciente"
            />
        </form>
    </div>
  )
}

export default Formulario