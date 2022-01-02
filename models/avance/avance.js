import mongoose from 'mongoose';
import { ProjectModel } from '../proyecto/proyecto.js';
import { UserModel } from '../usuario/usuario.js';

const { Schema, model } = mongoose;

// interface Avance {
//   fecha: Date;
//   descripcion: string;
//   observaciones: [string];
//   proyecto: Schema.Types.ObjectId;
//   creadoPor: Schema.Types.ObjectId;
// }

const avanceSchema = new Schema({
    Date: {
        type: Date,
        required: true,
    },
    Observations: {
        type: String,
        required: true,
    },
    Project: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        required: true,
    },
    CreatedBy: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    },
});

const ModeloAvance = model('Progresses', avanceSchema);

export { ModeloAvance };