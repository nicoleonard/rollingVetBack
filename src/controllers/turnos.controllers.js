import Turno from "../models/turnos"

export const obtenerTurnos = async (req,res)=>{
    try{
        const turnos = await Turno.find()
        res.status(200).json(turnos)
    } catch (error){
        console.log(error)
        res.status(404).json({mensaje: 'No se pudo buscar los turnos'})
    }
}

export const obtenerTurno = async (req,res)=>{
    try{
        const turno = await Turno.findById(req.params.id, req.body)
        res.status(200).json(turno)
    } catch (error){
        console.log(error)
        res.status(400).json({mensaje: 'No se pudo encontrar el turno'})
    }
}

export const crearTurno = async (req,res)=>{
    try{
        const nuevoTurno = new Turno(req.body)
        await nuevoTurno.save()
        res.status(201).json({mensaje: 'El turno se creó correctamente'})
    } catch (error){
        console.log(error)
        res.status(404).json({mensaje: 'No se pudo crear el turno'})
    }
}

export const borrarTurno = async (req,res)=>{
    try{
        await Turno.findByIdAndDelete(req.params.id)
        res.status(200).json({mensaje: 'El turno se borró correctamente'})
    } catch (error){
        console.log(error)
        res.status(404).json({mensaje: 'No se pudo borrar el turno'})
    }
}

export const editarTurno = async (req,res)=>{
    try{
        await Turno.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({mensaje: 'El turno se editó correctamente'})
    } catch (error){
        console.log(error)
        res.status(400).json({mensaje: 'No se pudo modificar el turno'})
    }
}

