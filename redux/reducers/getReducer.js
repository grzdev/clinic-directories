let defaultState = {
    hospital: ''
}

const mainReducer= ( state = defaultState, action)=>{
    if(actions.type === "GET_HOSPITAL"){
        return{
            ...state,
            hospital: action.hospital
        }
    }else{
        return{
            ...state
        }
    }
}