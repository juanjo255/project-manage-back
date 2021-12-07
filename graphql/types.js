import { gql } from "apollo-server-core"
import { Types_Users } from "../models/usuario/tipos.js"
import { ProjectTypes } from "../models/proyecto/tipos.js"
import { Advance_Types } from "../models/avance/tipos.js"
import { Inscription_Types } from "../models/inscripcion/tipos.js";
import { Enums_Types } from "../models/enums/tipos.js"

const GlobalTypes = gql`
  scalar Date
`;

const tipos = [
  GlobalTypes,
  Types_Users,
  ProjectTypes,
  Advance_Types,
  Inscription_Types,
  Enums_Types
]

export {tipos}