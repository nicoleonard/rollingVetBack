import Servicio from "../models/servicios"

export const obtenerServicios = async (req,res)=>{
    try{
        const servicios = await Servicio.find()
        res.status(200).json(servicios)
    } catch (error){
        console.log(error)
        res.status(404).json({mensaje: 'No se pudo buscar los servicios'})
    }
}

export const obtenerServicio = async (req,res)=>{
    try{
        const servicio = await Servicio.findById(req.params.id, req.body)
        res.status(200).json(servicio)
    } catch (error){
        console.log(error)
        res.status(400).json({mensaje: 'No se pudo encontrar los servicios'})
    }
}

export const crearServicio = async (req,res)=>{
    try{
        const nuevoServicio = new Servicio(req.body)
        await nuevoServicio.save()
        res.status(201).json({mensaje: 'El servicio se creó correctamente'})
    } catch (error){
        console.log(error)
        res.status(404).json({mensaje: 'No se pudo crear el servicio'})
    }
}

export const borrarServicio = async (req,res)=>{
    try{
        await Servicio.findByIdAndDelete(req.params.id)
        res.status(200).json({mensaje: 'El servicio se borró correctamente'})
    } catch (error){
        console.log(error)
        res.status(404).json({mensaje: 'No se pudo borrar el servicio'})
    }
}

export const editarServicio = async (req,res)=>{
    try{
        await Servicio.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({mensaje: 'El servicio se editó correctamente'})
    } catch (error){
        console.log(error)
        res.status(400).json({mensaje: 'No se pudo modificar el servicio'})
    }
}