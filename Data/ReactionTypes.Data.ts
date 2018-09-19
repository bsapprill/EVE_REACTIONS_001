import { Tier1CompositeReaction } from "../models/ReactionTiers/Tier1-CompositeReaction";
import { ReactionRequirements } from "../models/ReactionTiers/ReactionRequirements";


export const TIER_1_COMPOSITE_REACTIONS: ReactionRequirements = {
    'Caesarium Cadmide': {fuelBlockType: 'Oxygen', materials: ['Cadmium', 'Caesium']},
    'Carbon Polymers': {fuelBlockType: 'Helium', materials: ['Hydrocarbons', 'Silicates']},
    'Ceramic Powder': {fuelBlockType: 'Hydrogen', materials: ['Evaporite Deposits', 'Silicates']},
}

export const TIER_1_CONSTANTS = {
    'OutcomeValue': 200,
    'MaterialInputValue': 100,
    'FuelBlockInputValue': 5,
    'MinutesPerRun': 180
}