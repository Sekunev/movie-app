import Search from "../components/Search";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const Main = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [search, setSearch] = useState(false);
  const [filmList, setFilmList] = useState([]);

  const url1 = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`;

  const url2 = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

  useEffect(() => {
    getFilm();
  }, []);

  const getFilm = async () => {
    const { data } = await axios(search ? url1 : url2).catch((err) =>
      console.log(err)
    );
    setFilmList(data.results);
    console.log("filmList :>> ", filmList);
  };

  return (
    <>
      <Search />
      {filmList.map((item) => {
        const { original_title, overview, poster_path, vote_average, id } =
          item;
        const films = {
          original_title,
          overview,
          poster_path,
          vote_average,
          id,
        };
        return <MovieCard key={id} {...films} />;
      })}
    </>
  );
};

export default Main;
