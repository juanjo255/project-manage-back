import { gql } from 'apollo-server-express';

const Inscription_Types = gql`
  type Inscription {
    _id: ID!
    Inscription_State: String
    Project: Project!
    Student: User!
  }
  type Query {
    Inscriptions: [Inscription]
  }
  type Mutation {
    CreateInscription(
      Project: String!
      Student: String!
    ): Inscription
    
    ResponseInscription(id: String!, value: String!): Inscription
  }
`;

export { Inscription_Types };