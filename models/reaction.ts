import { ReactionMaterial } from "./reaction-material";
import { MaterialRequirement } from "./material-requirement";

export interface Reaction {

    name: string,
    material_requirements: MaterialRequirement[]
}