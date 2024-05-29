import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import Error from "./Error";
import { baseImgUrl } from "../constants";

const Hero = () => {
  const {isLoading,error,movies} = useSelector((store)=>store.movies)
  // console.log(isLoading);
  // console.log(error);
  // console.log(movies);

  const i = (Math.floor(Math.random() * movies.length));
  // console.log(movies[i]);\
  const movie = movies[i]


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-h-[400px] gap-5 mb-10 mt-10">
    {
      !movie || isLoading ? (<Loader/>) : error ? ( <Error/>) : (
        <>
          <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="text-start">
         {movie?.overview}
        </p>
        <p>
          <span>IMDB:</span>
          <span className="text-yellow-400 ms-2 font-semibold">{movie.vote_average.toFixed(1)}</span>
        </p>
        <div className="flex gap-5">
          <button className="p-2 rounded bg-red-600 hover:bg-red-700">Filmi İzle</button>
          <button className="p-2 rounded bg-blue-600 hover:bg-blue-700">Listeye Ekle</button>
        </div>
      </div>

      <div>
        <img className="hero-img object-contain rounded-md max-h-[300px] w-[100%] my-4 md:mx-3 "
          src={baseImgUrl + movie.backdrop_path}
          alt=""
        />
      </div>
        </>
      )
    }
    </div>
  );
};

export default Hero;
