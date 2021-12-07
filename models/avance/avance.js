import mongoose from 'mongoose';
import { ProjectModel } from '../proyecto/proyecto.js';
import { UserModel } from '../usuario/usuario.js';

const { Schema, model } = mongoose;

const AdvanceSchema = new Schema({
  Date_Advance: {
    type: Date,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Remarks: [
    {
      type: String,
    },
  ],
  project: {
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

const AdvanceModel = model('Advance', AdvanceSchema);

export { AdvanceModel };
