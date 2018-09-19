import { Tier1CompositeReaction } from "./Tier1-CompositeReaction";

export interface Tier2CompositeReaction {
    name: string,

    fuelBlockType: string,
    
    materials: Tier1CompositeReaction[]
}