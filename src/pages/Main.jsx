import Search from "../components/Search";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { useAuthContext } from "../context/AuthContext";
import Grid from "@mui/material/Grid";
import { toastWarnNotify } from "../assest/ToastMessage";

const Main = () => {
  const { loggedUser } = useAuthContext();

  const API_KEY = process.env.REACT_APP_API_KEY;
  const [search, setSearch] = useState("");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search && loggedUser) {
      getFilm();
      setSearch("");
    } else if (!loggedUser) {
      toastWarnNotify("Please log in to search a movie");
      // alert("please log in to see details");
    } else {
      toastWarnNotify("Please enter a text");
      // alert("please enter a text");
    }
  };

  return (
    <Grid>
      <Search
        search={search}
        setSearch={setSearch}
        handleSubmit={handleSubmit}
      />
      <Grid container sx={{ p: 2 }} justifyContent="center">
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
