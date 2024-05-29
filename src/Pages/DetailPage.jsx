import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import Loader from "../Components/Loader";
import { baseImgUrl } from "../constants";
import DetailDisplay from "../Components/DetailDisplay";
import millify from "millify";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ActorCard from "../Components/ActorCard";

const DetailPage = () => {
  // url'den filmin id'sini useParams methodu ile aldik
  const { id } = useParams();
  // console.log(id);

  const [movie, setMovie] = useState(null);

  const params ={
    append_to_response:"credits,videos"
  }

  useEffect(() => {
    api
      .get(`movie/${id}`, {params})
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(movie);

  return (
    <div className="mt-10">
      {!movie ? (
        <Loader />
      ) : (
        <div>
          {/**ust alan  */}
          <div className="relative h-[20vh]">
            <img
              className="h-full w-full object-cover"
              src={baseImgUrl + movie.backdrop_path}
              alt=""
            />

            <div className="absolute bg-black inset-0 grid place-items-center opacity-50">
              {" "}
              <h2 className="text-3xl font-semibold">{movie.title}</h2>
            </div>
          </div>

          {/**orta alan */}
          <div className="my-10 grid grid-cols-1 md:grid-cols-2">
            <div>
              <DetailDisplay title={"Kategoriler"} data={movie.genres} />
              <DetailDisplay
                title={"Konuşulan Diller"}
                data={movie.spoken_languages}
              />
              <DetailDisplay
                title={"Yapımcı Şirketler"}
                data={movie.production_companies}
              />
              <DetailDisplay
                title={"Yapımcı Ülkeler"}
                data={movie.production_countries}
              />
            </div>

            <div className="flex flex-col gap-2">
              <p>{movie.overview}</p>
              <p>
                <span>Bütçe:</span>
                <span className="text-green-500 ms-2">${millify(movie.budget)}</span>
              </p>
              <p>
                <span>Hasılat</span>
                <span className="text-green-500 ms-2">${millify(movie.revenue)}</span>
              </p>
              
            </div>
          </div>

          {/**slider alani  */}
          <div>
          <Splide  options={{
            pagination:false,
            autoWidth:true,
            gap:"10px",
            rewind      : true,
            rewindByDrag: true,
          }} >
            {movie.credits.cast.map((actor,i)=> (
              <SplideSlide>
                  <ActorCard key={i} actor={actor} />
              </SplideSlide>
            ) )}          </Splide>
          </div>

        </div>
      )}
    </div>
  );
};

export default DetailPage;
