import { AdvanceModel } from './avance.js';

const Advances_Resolvers = {
    Query: {
        Advances: async (parent, args) => {
        const advances = await AdvanceModel.find().populate('project');
        return advances;
        },
        FilterAdvance: async (parents, args) => {
        const AdvanceFiltered = await AdvanceModel.find({ project: args._id })
            .populate('project')
            .populate('CreatedBy');
        return AdvanceFiltered;
        },
    },
    Mutation: {
        CreateAdvance: async (parents, args) => {
            const NewAdvance = AdvanceModel.create({
                Date_Advance: args.Date_Advance,
                Description: args.Description,
                project: args.project,
                CreatedBy: args.CreatedBy,
            });
            return NewAdvance;
        },
        CreateRemarks: async (parents, args) => {
            const NewRemark = AdvanceModel.findByIdAndUpdate(
                args.idAdvance,
                {
                    $addToSet: {
                        Remarks: 
                        {
                            Comment: args.Comment,
                        },
                    },
                },
                { new: true }
            );
            return NewRemark;
        },
        UpdateDescription: async (parents, args) => {
            const NewDescription = await AdvanceModel.findByIdAndUpdate(
                args.idAdvance, 
                {  Description: args.Description }, 
                { new: true }
            );
            return NewDescription;
        },
    },
};

export { Advances_Resolvers };