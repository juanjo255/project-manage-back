import { Users_Controllers } from "../models/usuario/resolvers.js";
import { Resolvers_Projects } from "../models/proyecto/resolvers.js";
import { Inscriptions_Resolvers } from "../models/inscripcion/resolvers.js";
import { Autenticacion_resolvers } from "./auth/resolvers.js";
import { Avance_Resolvers } from "../models/avance/controlers.js";

const resolvers = [
    Autenticacion_resolvers,
    Users_Controllers,
    Resolvers_Projects,
    Inscriptions_Resolvers,
    Avance_Resolvers]

export {resolvers}