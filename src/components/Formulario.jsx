import {useState, useEffect} from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [email, setEmail] = useState("");
    const [fecha, setFecha] = useState("");
    const [sintomas, setSintomas] = useState("");

    const[error, setError] = useState(false);

    useEffect(()=>{
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setDireccion(paciente.direccion)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    },[paciente])

    const generarId = () =>{
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)

        return random + fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //Validación de formulario
        if([nombre, direccion, email, fecha, sintomas].includes("")){
            setError(true);
            return;
        }
        setError(false);
        
        //Objeto de paciente
        const objetoPaciente = {
            nombre,
            direccion,
            email,
            fecha,
            sintomas,
        }

        if(paciente.id){
            //Editando el registro
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

            setPacientes(pacientesActualizados)
            setPaciente({})
        }else{
            //Nuevo registro
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }
        //Reiniciar Form
        setNombre("")
        setDireccion("")
        setEmail("")
        setFecha("")
        setSintomas("")
    }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h1 className="font-black text-3xl text-center">
            Seguimiento paciente
        </h1>
        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {""}
            <span className="text-indigo-600 font-bold">
                Administralos
            </span>
        </p>
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg py-10 px-5 mb-10">
            {error && <Error><p>Todos los campos son obligatorios</p></Error>}
            <div className="mb-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="nombre">Nombre Paciente</label>
                <input 
                    id="nombre"
                    type="text" 
                    placeholder="Nombre del paciente"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="direccion">Dirección del Paciente</label>
                <input 
                    id="direccion"
                    type="text" 
                    placeholder="Dirección del paciente"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email del Paciente</label>
                <input 
                    id="email"
                    type="text" 
                    placeholder="Email del paciente"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="fecha">Fecha</label>
                <input 
                    id="fecha"
                    type="date" 
                    placeholder="del paciente"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas del Paciente</label>
                <input 
                    id="sintomas"
                    type="text" 
                    placeholder="Sintomas del paciente"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={sintomas}
                    onChange={(e) => setSintomas(e.target.value)}
                />
            </div>
            <input 
                type="submit" 
                className="bg-indigo-600 w-full p-3 text-white font-bold rounded-lg hover:bg-indigo-700 cursor-pointer uppercase transition-all"
                value={paciente.id ? 'Editar paciente': 'Agregar paciente'}
            />
        </form>
    </div>
  )
}

export default Formulario