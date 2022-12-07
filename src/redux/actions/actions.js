import { CHANGE } from "./actionTypes";


function onChange(arr) {
    return {
        type: CHANGE,
        payload: {arr}
    }
}

export {onChange}