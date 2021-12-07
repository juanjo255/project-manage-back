import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ObjectiveSchema = new Schema({
  Description: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    enum: ['GENERAL', 'SPECIFIC'],
    required: true,
  },
});

const ObjectiveModel = model('Objective', ObjectiveSchema);

export { ObjectiveModel };
