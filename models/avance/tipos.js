import { gql } from 'apollo-server-express';

const Avance_Types = gql`
    
    type Avance {
        _id: ID!
        Date: Date!
        Observations: String!
        Project: Project!
        CreatedBy: User!
    }

    type Query {
        Avances: [Avance]
        filtrarAvance(ProjectId: String!): [Avance]
    }
    type Mutation {
        crearAvance(Date: Date!, Observations: String!, Project: String!, CreatedBy: String!): Avance
        editarObservation (_id: String!, Observations: String!): Avance
    }
`;

export { Avance_Types };