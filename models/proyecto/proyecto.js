import mongoose from 'mongoose';
import { UserModel } from '../usuario/usuario.js';
const { Schema, model } = mongoose;

const projectSchema = new Schema(
  {
    
    NameProject: {
      type: String,
      required: true,
    },
    Budget: {
      type: Number,
      required: true,
    },
    Initial_Date: {
      type: Date,
      required: true,
    },
    Final_Date: {
      type: Date,
      required: true,
    },
    ProjectState: {
      type: String,
      enum: ['ACTIVE', 'INACTIVE'],
      default: 'INACTIVE',
    },
    Phase: {
        type: String,
        enum: ['STARTED', 'DEVELOPMENT', 'FINISHED', 'NULL'],
        default: 'NULL',
    },
    Leader: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: UserModel,
    },
    Objectives: [
      {
        Description: {
          type: String,
          required: true,
        },
        Type: {
          type: String,
          enum: ['GENERAL', 'SPECIFIC'],
          required: true,
        },
      },
    ],
  },
  {
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
  }
);


projectSchema.virtual('inscriptions', {
  ref: 'Inscription',
  localField: '_id',
  foreignField: 'project',
});

const ProjectModel = model('Project', projectSchema);

export { ProjectModel };
