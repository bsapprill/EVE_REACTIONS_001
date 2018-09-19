export function createReducer(stateModel, actionMap) {

    return function reducer(state = stateModel, action) {

        return actionMap.hasOwnProperty(action.type) 
            ? actionMap[action.type](state, action)
            : state;
    }
}