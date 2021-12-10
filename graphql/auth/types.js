import { gql } from 'apollo-server-express';

const Autenticacion_types = gql`
    type Token {
        token: String
        error: String
    }
    type Mutation {
        registro(
            Name: String!
            Lastname: String!
            Identification: String!
            Email: String!
            Role: Enum_Role!
            State: Enum_UserState
            Password: String!
        ): Token!
        login(Email: String!, Password: String!): Token
        refreshToken: Token
    }
`;

export { Autenticacion_types };