import { TypeAndQuantity } from "../models/TypeAndQuantity";

export const App_ActionMap = {
    'UpdateUsersSelectedTypes': UpdateUsersSelectedTypes,

    'RemoveTypeFromList': RemoveTypeFromList,

    'UpdateMoonMaterials': UpdateMoonMaterials,
}

function RemoveTypeFromList(state, action) {

    let CurrentMap = new Map(state.UsersSelectedTypes);
    
    CurrentMap.delete(action.TypeName);

    let newState
        = Object.assign({}, state, {UsersSelectedTypes: CurrentMap});

    return newState;
}

function UpdateMoonMaterials(state, action) {
    
    let newState
        = Object.assign({}, state, {RequiredMoonMaterials: action.MaterialList});

    return newState;
}

function UpdateUsersSelectedTypes(state, action) {

    let CurrentMap = new Map(state.UsersSelectedTypes);
    
    CurrentMap.set(action.Type.TypeName, action.Type.Quantity);

    // if(!CurrentMap.has(action.Type.TypeName)) {
    //     CurrentMap.set(action.Type.TypeName, action.values.Quantity);
    // }
    // else {
    //     CurrentMap[action.values.TypeName] = action.values.Quantity;
    // }

    let newState
        = Object.assign({}, state, {UsersSelectedTypes: CurrentMap});

    return newState;    
}

function ChangeActiveLink(state, action) {
    
    let newState 
        = Object.assign({}, state, { App_ActiveLink: action.newLink });

    return newState;
}

function SubmitSignIn(state, action) {
    
    let newState 
        = Object.assign({}, state, { App_ActiveLink: action.newLink });

    return newState;
}
