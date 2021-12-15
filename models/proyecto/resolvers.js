import { ProjectModel } from './proyecto.js';
import { UserModel } from '../usuario/usuario.js';
import { InscriptionModel } from '../inscripcion/inscripcion.js';

const Resolvers_Projects = {
    Project: {
        Leader: async (parent, args, context) => {
            const user = await UserModel.findOne({
                _id: parent.Leader.toString()
            });
            return user;
        },
        Inscriptions: async (parent, args, context) => {
            const Inscriptions = await InscriptionModel.find ({
                Project: parent._id,
            });
            return Inscriptions;
        },
    },
    Query: {
        Projects: async (parent, args, context) => {
        const projects = await ProjectModel.find();
        return projects;
        },
    },
    Mutation: {
        CreateProject: async (parent, args) => {
            const NewProject = await ProjectModel.create({
                NameProject: args.NameProject,
                Budget: args.Budget,
                Initial_Date: args.Initial_Date,
                Final_Date: args.Final_Date,
                ProjectState: args.ProjectState,
                Phase: args.Phase,
                Leader: args.Leader,
                Objectives: args.Objectives,
            });
            return NewProject;
        },
        UpdateProject: async (parent, args) => {
            const UpdatedProject = await ProjectModel.findByIdAndUpdate(
                args.idProject,
                args.Fields,
                { new: true }
            );
            return UpdatedProject;
        },
        UpdateProjectState: async (parent, args) => {
            const StateUpdated = await ProjectModel.findByIdAndUpdate(
                args.idProject,
                {  ProjectState: args.ProjectState },
                { new: true }
            );
            return StateUpdated;
        },
        UpdatePhase: async (parent, args) => {
            const PhaseUpdated = await ProjectModel.findByIdAndUpdate(
                args.idProject, 
                {  Phase: args.Phase }, 
                { new: true }
            );
            return PhaseUpdated;
        },
        CreateObjective: async (parent, args) => {
            const ProjectwithObjective = await ProjectModel.findByIdAndUpdate(
                args.idProject,
                {
                    $addToSet: {
                        Objectives: 
                        {
                            Description: args.Description,
                            Type: args.Type,
                        },
                    },
                },
                { new: true }
            );
            return ProjectwithObjective;
        },
        DeleteObjective: async (parent, args) => {
            const ObjectiveDeleted = await ProjectModel.findByIdAndDelete( { _id: args.idObjective });
            return ObjectiveDeleted;
        },
    },
};

export { Resolvers_Projects };