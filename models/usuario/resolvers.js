import { UserModel } from './usuario.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const Users_Controllers = {
    Query: {
        Users: async (parent, args) => {
            const users = await UserModel.find();
            return users;
        },
        User: async (parent, args) => {
            const User = await UserModel.findOne({ _id: args._id });
            return User;
        },
    },
    Mutation: {
        CreateUser: async (parent, args) => {
            const NewUser = await UserModel.create({
                Name: args.Name,
                Lastname: args.Lastname,
                Identification: args.Identification,
                Password: args.Password,
                Email: args.Email,
                Role: args.Role,
            });

            if (Object.keys(args).includes('State')) {
                NewUser.State = args.State;
            }

            return NewUser;
        },
        Login: async (parent, args) => {
            const user = await UserModel.findOne({ Email: args.Email });
            const password = bcrypt.compare(args.Password, user.Password);
            const token = jwt.sign({ id: user._id }, 'secret', {
                expiresIn: 60 * 60 * 24,
            });
            return token;
        },
        UpdateUser: async (parent, args) => {
            const UserUpdated = await UserModel.findByIdAndUpdate(
                args._id, {
                    Name: args.Name,
                    Lastname: args.Lastname,
                    Identification: args.Identification,
                    Email: args.Email,
                    State: args.State,
                },
                { new: true }
            );
            return UserUpdated;
        },
        UpdateState: async (parent, args) => {
            const StateUpdated = await UserModel.findByIdAndUpdate(
                args._id, {
                    State: args.State,
                },
                { new: true }
            );
            return StateUpdated;
        },
        DeleteUser: async (parent, args) => {
            if (Object.keys(args).includes('_id')) {
                const UsertoDelete = await UserModel.findOneAndDelete({ _id: args._id });
                return UsertoDelete;
            } else if (Object.keys(args).includes('Email')) {
                const UsertoDelete = await UserModel.findOneAndDelete({ Email: args.Email });
                return UsertoDelete;
            }
        },
        editProfile: async (parent, args) => {
            const UserToEdit = await UserModel.findByIdAndUpdate(args._id, args.Fields)
            return UserToEdit;
        }
    },
};

export { Users_Controllers };