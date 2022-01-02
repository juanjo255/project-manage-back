import { gql } from 'apollo-server-express';

const ProjectTypes = gql`
    type Objective {
        _id: ID!
        Description: String!
        Type: Enum_ObjectiveType!
    }
    input CreateObjective {
        Description: String!
        Type: Enum_ObjectiveType!
    }
    input ProjectFields {
        NameProject: String
        Budget: Float
        Initial_Date: Date
        Final_Date: Date
        ProjectState: Enum_ProjectState
        Phase: Enum_ProjectPhase
        Leader: String
        Objectives: [CreateObjective]
    }
    type Project {
        _id: ID!
        NameProject: String!
        Budget: Float!
        Initial_Date: Date!
        Final_Date: Date!
        ProjectState: Enum_ProjectState!
        Phase: Enum_ProjectPhase!
        Leader: User!
        Objectives: [Objective]
        Inscriptions: [Inscription]
    }
    type Query {
        Projects: [Project]
    }
    type Mutation {
        CreateProject(
        NameProject: String!
        Budget: Float!
        Initial_Date: Date!
        Final_Date: Date!
        ProjectState: Enum_ProjectState
        Phase: Enum_ProjectPhase
        Leader: String!
        Objectives: [CreateObjective]
        ): Project,

        UpdateProjectState(
            idProject: String!
            ProjectState: Enum_ProjectState!
        ): Project,

        UpdatePhase(
        idProject: String!
        Phase: Enum_ProjectPhase!
        ): Project,
        
        UpdateProject(
            idProject: String!,
            Fields: ProjectFields!
            ): Project

        CreateObjective(idProject: String!, Description: String!, Type: Enum_ObjectiveType!): Project
        DeleteObjective(idProject: String!, idObjective: String!): Project
    }
`;

export { ProjectTypes };