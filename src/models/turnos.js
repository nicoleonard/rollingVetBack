import { Schema, model } from "mongoose";

const turnoSchema = new Schema({
    nombreDoctor: {
        type: String,
        required: true
    },
    horario: {
        type: String,
        required: true,
        unique: true
    }
})

const Turno = model("turno", turnoSchema);

export default Turno