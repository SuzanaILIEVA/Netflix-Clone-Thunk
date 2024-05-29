import { ActionsTypes } from "../actionsTypes";

const initialState = {
    isLoading : false,
    error:null,
    movies:[],
}

const movieReducer = (state= initialState,action)=>{
    const {type,payload} = action
    // console.log(payload);

    switch(type){
        case ActionsTypes.MOVIES_LOADING:
            return {...state,isLoading:true}

        case ActionsTypes.MOVIES_ERROR:
            return {...state, isLoading:false,error:payload}

        case ActionsTypes.MOVIES_SUCCESS:
            return {...state,isLoading:false,error:null,movies:payload.results}    
        
            default:
                return state;
    }

}

export default movieReducer