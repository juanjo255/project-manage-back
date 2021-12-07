import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Lastname: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: 'El formato del correo electrónico es erroneo',
    },
  },
  Identification: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
    unique: true,
  },
  Role: {
    type: String,
    required: true,
    enum: ['STUDENT', 'LEADER', 'ADMINISTRATOR'],
  },
  State: {
    type: String,
    enum: ['PENDING', 'AUTHORIZED', 'UNAUTHORIZED'],
    default: 'PENDING',
  },
});

const UserModel = model('Users', UserSchema);

export { UserModel };
