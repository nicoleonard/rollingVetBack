import {Turno} from "../models/turnos"

export const inicializarTurno = async (req,res) =>{
    try{
        
        const {hora,veterinario}=req.body
        const fecha = new Date()
        const nuevoTurno = new Turno({"_id":req.params.id ,veterinario,hora,"turnoLibre": true,"detalleCita": "turno liberado", "usuario": "libre", "paciente": "libre", "fecha": fecha.getDate()})
        console.log(nuevoTurno)
        await Turno.findByIdAndUpdate(req.params.id, nuevoTurno)

        res.status(200).json({mensaje: 'El turno se inicializó correctamente'})
    }catch(error){
        console.log(error)
        res.status(404).json({mensaje: `No se pudo inicializar el turno ${nuevoTurno.hora} ${nuevoTurno.veterinario}`})
    }

}

export const inicializarTurnos = async (req,res) =>{
    try{
        
        const {horarios,veterinarios}=req.body
        const fecha = new Date()
        const paquete = [];
        veterinarios.map(veterinario => {
            for(let i=0; i<horarios.length;i++){
                paquete.push({veterinario: veterinario, hora: horarios[i], turnoLibre: true, detalleCita: "turno libre", usuario: "libre", paciente: "libre", fecha: fecha.getDate(), servicios:"libre"})
            }
        });
        await Turno.insertMany(paquete)
        res.status(201).json({mensaje: "Los turnos se han inicializado con éxito"})

    }catch(error){
        console.log(error)
        res.status(404).json({mensaje: `No se pudo inicializar los turnos`})
    }

}


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

export const borrarTurnos = async (req,res)=>{
    try{
        await Turno.deleteMany()
        res.status(200).json({mensaje: 'Los turnos se borraron correctamente'})
    } catch (error){
        console.log(error)
        res.status(404).json({mensaje: 'No se pudo borrar los turnos'})
    }
}

export const actualizarTurno = async (req,res)=>{
    try{
        console.log(req.params.id)
        await Turno.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({mensaje: 'El turno se editó correctamente'})
    } catch (error){
        console.log(error)
        res.status(400).json({mensaje: 'No se pudo modificar el turno'})
    }
}

