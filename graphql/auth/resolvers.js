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
        //console.log('usuario creado', usuarioCreado);
        return {
            token: generateToken({
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
        const usuarioEcontrado = await UserModel.findOne({ correo: args.correo });
        if (await bcrypt.compare(args.password, usuarioEcontrado.password)) {
            return {
                token: generateToken({
                    Name: usuarioEcontrado.Name,
                    Lastname: usuarioEcontrado.Lastname,
                    Identification: usuarioEcontrado.Identification,
                    Password: usuarioEncontrado.Password,
                    Email: usuarioEcontrado.Email,
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