import { InscriptionModel } from './inscripcion.js';

const Inscriptions_Resolvers = {
    Query: {
        Inscriptions: async (parent, args) => {
            const inscriptions = await InscriptionModel.find().populate('Project').populate('Student');
            return inscriptions;
        },
    },
    Mutation: {
        CreateInscription: async (parent, args) => {
            const NewInscription = await InscriptionModel.create({
                Inscription_State: args.Inscription_State,
                Project: args.Project,
                Student: args.Student,
            });
            return NewInscription;
        },
        ResponseInscription: async (parent, args) => {
            const InscriptionOk = await InscriptionModel.findByIdAndUpdate(
                args.id,
                {
                    Inscription_State: args.value,
                    Income_Date: Date.now(),
                },
                { new: true }
            );
            return InscriptionOk;
        },
    },
};

export { Inscriptions_Resolvers };