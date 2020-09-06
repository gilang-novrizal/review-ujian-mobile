import { GET_DATA } from "../action/helper"

const INITIAL_STATE = {
    data: null
}

const apiReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case GET_DATA:
            return{...state, data: action.payload}
        default:
            return state
    }
}

export default apiReducer