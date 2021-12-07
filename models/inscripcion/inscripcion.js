import mongoose from 'mongoose';
import { ProjectModel } from '../proyecto/proyecto.js';
import { UserModel } from '../usuario/usuario.js';
const { Schema, model } = mongoose;

const InscriptionSchema = new Schema({
  Name_project: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
    required: true,
  },
  Initial_Date: {
    type: Date,
  },
  Final_Date: {
    type: Date,
  },
  Leader: {
    type: String
  },
  Student: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
  Inscription_State: {
    type: String,
    enum: ['ACCEPTED', 'REJECTED'],
    default: 'REJECTED',
  },
  Income_Date: {
    type: Date,
  },
  Outcome_Date: {
    type: Date,
  },
});

const InscriptionModel = model('Inscription', InscriptionSchema);

export { InscriptionModel };
