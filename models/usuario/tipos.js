import { gql } from 'apollo-server-express';

const Types_Users = gql`
        input FieldsEditProfile {
                Name: String
                Lastname: String
                Identification: String
        }
        type User {
                _id: ID!
                Name: String!
                Lastname: String!
                Identification: String!
                Password: String!
                Email: String!
                Role: Enum_Role!
                State: Enum_UserState
        }
        type Query {
                Users: [User]
                User(_id: String!): User
        }
        type Mutation {
                CreateUser(
                        Name: String!
                        Lastname: String!
                        Email: String!
                        Identification: String!
                        Password: String!
                        Role: Enum_Role!
                ): User,

                Login(
                        Email: String!
                        Password: String!
                ): User,

                UpdateUser(
                        _id: String!
                        Name: String!
                        Lastname: String!
                        Email: String!
                        Identification: String!
                        State: Enum_UserState!
                        ): User,

                UpdateState(
                        State: Enum_UserState!
                        ): User,
                
                DeleteUser(_id: String!, Email: String!): User
                editProfile (_id:String!, Fields:FieldsEditProfile!):User
        }
`;

export { Types_Users };