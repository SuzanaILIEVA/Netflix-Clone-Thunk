import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import movieReducer from "./reducers/movieReducer";
import genreReducer from "./reducers/genreReducer";


const rootReducer = combineReducers({
        movies: movieReducer,
        genres:genreReducer,
})



 const store = createStore(rootReducer,applyMiddleware(thunk))

 export default store;