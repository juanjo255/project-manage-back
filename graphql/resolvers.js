import { Users_Controllers } from "../models/usuario/resolvers.js";
import { Resolvers_Projects } from "../models/proyecto/resolvers.js";
import { Inscriptions_Resolvers } from "../models/inscripcion/resolvers.js";
const resolvers = [Users_Controllers, Resolvers_Projects, Inscriptions_Resolvers]

export {resolvers}