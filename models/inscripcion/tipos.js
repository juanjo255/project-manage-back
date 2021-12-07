import { gql } from 'apollo-server-express';

const Inscription_Types = gql`
  type Inscription {
    _id: ID!
    Income_Date: Date
    Outcome_Date: Date
    Inscription_State: String
    Name_project: Project!
    Student: User!
  }
  type Query {
    Inscriptions: [Inscription]
  }
  type Mutation {
    CreateInscription(
      Name_project: String!
      Student: String!
    ): Inscription
    
    AcceptInscriptions(id: String!): Inscription
  }
`;

export { Inscription_Types };