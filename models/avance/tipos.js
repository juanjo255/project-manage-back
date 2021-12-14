import { gql } from 'apollo-server-express';

const tiposAvance = gql`
    type Avance {
        _id: ID!
        Date: Date!
        Description: String!
        Observations: [String]
        Project: Project!
        CreatedBy: Usuario!
    }

    type Query {
        Avances: [Avance]
        filtrarAvance(_id: String!): [Avance]
    }
    type Mutation {
        crearAvance(Date: Date!, Description: String!, Project: String!, CreatedBy: String!): Avance
    }
`;

export { tiposAvance };