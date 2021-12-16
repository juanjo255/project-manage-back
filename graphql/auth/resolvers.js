import { UserModel } from '../../models/usuario/usuario.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../../utils/tokenUtils.js';

const Autenticacion_resolvers = {
    Mutation: {
        registro: async (parent, args) => {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(args.Password, salt);
            const usuarioCreado = await UserModel.create({
                Name: args.Name,
                Lastname: args.Lastname,
                Identification: args.Identification,
                Email: args.Email,
                Role: args.Role,
                Password: hashedPassword,
            });
        return {
            token: generateToken({
                _id: usuarioCreado._id,
                Name: usuarioCreado.Name,
                Lastname: usuarioCreado.Lastname,
                Identification: usuarioCreado.Identification,
                Password: usuarioCreado.Password,
                Email: usuarioCreado.Email,
                Role: usuarioCreado.Role,
            }),
        };
    },

        login: async (parent, args) => {
            const usuarioEncontrado = await UserModel.findOne({ Email: args.Email });
            if (await bcrypt.compare(args.Password, usuarioEncontrado.Password)) {
                return {
                    token: generateToken({
                        _id: usuarioEncontrado._id,
                        Name: usuarioEncontrado.Name,
                        Lastname: usuarioEncontrado.Lastname,
                        Identification: usuarioEncontrado.Identification,
                        Password: usuarioEncontrado.Password,
                        Email: usuarioEncontrado.Email,
                        Role: usuarioEncontrado.Role,
                    }),
                };
            }
        },

        refreshToken: async (parent, args, context) => {
            console.log('contexto', context);
            if (!context.userData) {
                return {
                    error: 'token no valido',
                };
            } else {
            return {
                token: generateToken({
                    _id: context.userData._id,
                    Name: context.userData.Name,
                    Lastname: context.userData.Lastname,
                    Identification: context.userData.Identification,
                    Email: context.userData.Email,
                    Role: context.userData.Role,
                }),
            };
        }
        // validar que el contexto tenga info del usuario. si si, refrescar el token
        // si no devolver null para que en el front redirija al login.
        },
    },
};

export { Autenticacion_resolvers };