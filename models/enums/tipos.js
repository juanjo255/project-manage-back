import { gql } from 'apollo-server-express';

const Enums_Types = gql`
  enum Enum_UserState {
    PENDING
    AUTHORIZED
    UNAUTHORIZED
  }

  enum Enum_Role {
    STUDENT
    LEADER
    ADMINISTRATOR
  }

  enum Enum_ProjectState {
    ACTIVE
    INACTIVE
  }

  enum Enum_ProjectPhase {
    STARTED
    DEVELOPMENT
    FINISHED
    NULL
  }

  enum Enum_ObjectiveType {
    GENERAL
    SPECIFIC
  }

  enum Enum_InscriptionState {
    ACCEPTED
    REJECTED
  }
`;

export { Enums_Types };
