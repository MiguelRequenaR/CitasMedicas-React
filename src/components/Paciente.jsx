const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {""}
                <span className="font-normal normal-case">Miguel</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Dirección: {""}
                <span className="font-normal normal-case">Av. Real 2030</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {""}
                <span className="font-normal normal-case">user@user.com</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha: {""}
                <span className="font-normal normal-case">10 de Diciembre</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas: {""}
                <span className="font-normal normal-case">Fiebre y tos seca</span>
            </p>
            <div className="flex justify-between mt-5">
                <input 
                    type="submit"
                    className="bg-green-600 py-1 px-3 rounded-xl text-white font-semibold hover:bg-green-700"
                    value="Editar"
                />
                <input 
                    type="submit"
                    className="bg-red-600 py-1 px-3 rounded-xl text-white font-semibold hover:bg-red-700" 
                    value="Eliminar"
                />
            </div>
    </div>
  )
}

export default Paciente