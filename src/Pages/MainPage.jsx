import React, { useEffect } from "react";
import Hero from "../Components/Hero";
import { useDispatch, useSelector } from "react-redux";
import { getPopular } from "../redux/actions/movieActions";
import { getGenres } from "../redux/actions/genreAction";
import Loader from "../Components/Loader";
import Error from "../Components/Error";
import MovieList from "../Components/MovieList";

const MainPage = () => {
  const dispatch = useDispatch();

  const { isLoading, error, genres } = useSelector((store) => store.genres);

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPopular());
  }, []);

  return (
    <div>
      <Hero />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        genres.map((genre) => <MovieList key={genre.id} genre={genre}/>)
      )}
    </div>
  );
};

export default MainPage;
