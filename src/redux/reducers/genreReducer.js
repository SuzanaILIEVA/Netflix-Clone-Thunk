import { ActionsTypes } from "../actionsTypes";

const initialState = {
    isLoading : false,
    error:null,
    genres:[],
}

const genreReducer = (state=initialState,action)=>{
//  console.log(action)
const {type,payload} =action

switch(type){
    case ActionsTypes.GENRES_LOADING:
        return {...state,isLoading:false}

     case ActionsTypes.GENRES_ERROR:
        return {...state,isLoading:false,error:payload}   
    
    case ActionsTypes.GENRES_SUCCESS:
        // console.log(payload);
        return {...state,isLoading:false,error:null,genres:payload}

        default:
            return state;

}

}

export default genreReducer