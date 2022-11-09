import Search from "../components/Search";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { useAuthContext } from "../context/AuthContext";
import Grid from "@mui/material/Grid";

const Main = () => {
  const { loading } = useAuthContext();

  const API_KEY = process.env.REACT_APP_API_KEY;
  const [search, setSearch] = useState("");
  const [filmList, setFilmList] = useState([]);
  console.log(process.env.REACT_APP_API_KEY);

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
    <Grid>
      <Search search={search} setSearch={setSearch} />
      <Grid container sx={{ p: 2 }}>
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
      </Grid>
    </Grid>
  );
};

export default Main;
