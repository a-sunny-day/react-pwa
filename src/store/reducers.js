/*********************      Actions     */
const UPDATAE_COUNTER =  'UPDATAE_COUNTER';


let initState =  {
    counter: 0
};


export function appState(state = initState, action) {
    switch (action.type) {
        case UPDATAE_COUNTER:
            return {
                ...state,
                counter: state.counter++
            };
        default:
            return state;
    }
}

