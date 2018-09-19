import { App_ActionMap } from "./app.actions";
import { createReducer } from "../functions/createReducer";
import { UserSelectedType } from "../models/userselectedtype";
import { TypeAndQuantity } from "../models/TypeAndQuantity";
import { RAW_MOON_MATERIALS_DEFAULT } from "../Data/RawMoonMaterials.Data";

export interface IAppState {
    
    // UsersReactionList
    UsersSelectedTypes: Map<string, number>,

    // MaterialRequirementsList
    RequiredMoonMaterials: Map<string, number>,

    // Need a data structure that keys each selected types value

    
}

export const INITIAL_STATE: IAppState = {
    UsersSelectedTypes: new Map(),

    RequiredMoonMaterials: RAW_MOON_MATERIALS_DEFAULT,
}

export const rootReducer = createReducer(INITIAL_STATE, App_ActionMap)
