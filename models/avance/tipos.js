import { gql } from 'apollo-server-express';

const Advance_Types = gql`
    type Remark {
        _id: ID!
        Comment: String!
    }
    input CreateRemarks {
        Comment: String!
    }
    type Advance {
        _id: ID!
        Date_Advance: Date!
        Description: String!
        Remarks: [Remark]
        project: Project!
        CreatedBy: User!
    }
    type Query {
        Advances: [Advance]
        FilterAdvance(idProject: String!): [Advance]
    }
    type Mutation {
        CreateAdvance(
            Date_Advance: Date!, 
            Description: String!, 
            Remarks: [CreateRemarks]
            project: String!, 
            CreatedBy: String!
            ): Advance
        
        CreateRemarks(idAdvance: String!, Comment: String!): Advance
        UpdateDescription(idAdvance: String!, Description: String!): Advance
    }
    `;

export { Advance_Types };