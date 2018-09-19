import { TypeAndQuantity } from "./TypeAndQuantity";

export interface Reaction_MaterialRequirement {
    
    TypeName: string,
    Requirements: TypeAndQuantity[],
}