import { CHANGE } from "./actions/actionTypes";
const initialState = {
    counter: []
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case CHANGE:
            return {
                counter: action.payload.arr
            }
    
        default:
            return state
    }
}