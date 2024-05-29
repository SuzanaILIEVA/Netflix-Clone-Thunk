import { ActionsTypes } from "../actionsTypes"
import api from "../../utils/api"

// Api'den populer filmleri alip reducer'a aktaran asenkron thunk fonksiyonu 
export const getPopular = ()=>(dispatch)=>{

    dispatch({
        type:ActionsTypes.MOVIES_LOADING,
    })

    const params ={
        ragion:"TUR",
    }

    api.get("/movie/popular", {params}).then((res) =>{
        
        dispatch({
            type: ActionsTypes.MOVIES_SUCCESS,
            payload:res.data,
        })
    }).catch((err)=> dispatch({
        type: ActionsTypes.MOVIES_ERROR,
        payload: err.message,
    }))
}