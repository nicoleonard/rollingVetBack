import Paciente from "../models/pacientes"

export const obtenerPacientes = async (req,res)=>{
    try{
        const pacientes = await Pacientes.find()
        res.status(200).json(pacientes)
    } catch (error){
        console.log(error)
        res.status(404).json({mensaje: 'No se pudo buscar los pacientes'})
    }
}

export const obtenerPaciente = async (req,res)=>{
    try{
        const paciente = await Paciente.findById(req.params.id, req.body)
        res.status(200).json(paciente)
    } catch (error){
        console.log(error)
        res.status(400).json({mensaje: 'No se pudo encontrar los pacientes'})
    }
}

export const crearPaciente = async (req,res)=>{
    try{
        const nuevoPaciente = new Paciente(req.body)
        await nuevoPaciente.save()
        res.status(201).json({mensaje: 'El paciente se creó correctamente'})
    } catch (error){
        console.log(error)
        res.status(404).json({mensaje: 'No se pudo crear el paciente'})
    }
}

