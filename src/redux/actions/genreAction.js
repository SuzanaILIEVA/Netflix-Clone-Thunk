import api from "../../utils/api";
import { ActionsTypes } from "../actionsTypes";

export const getGenres = () => (dispatch) => {
  dispatch({
    type: ActionsTypes.GENRES_LOADING,
  });

  api
    .get("/genre/movie/list")
    .then((res) =>
      dispatch({
        type: ActionsTypes.GENRES_SUCCESS,
        payload: res.data.genres,
      })
    )
    .catch((err) =>
      dispatch({
        type: ActionsTypes.GENRES_ERROR,
        payload: err.message,
      })
    );
};
