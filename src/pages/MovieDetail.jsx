import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Grid } from "@mui/material";

import VideoSection from "../components/VideoSection";

export default function MovieDetail() {
  const [movieDetails, setMovieDetails] = useState("");
  const [videoKey, setVideoKey] = useState();
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    title,
    poster_path,
    overview,
    vote_average,
    vote_count,
    release_date,
  } = movieDetails;

  console.log("movieDetails", movieDetails);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

  useEffect(() => {
    axios
      .get(movieDetailBaseUrl)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
    axios
      .get(videoUrl)
      .then((res) => setVideoKey(res.data.results[0].key))
      .catch((err) => console.log(err));
  }, [movieDetailBaseUrl, videoUrl]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        flexWrap: "wrap",
        marginTop: "1rem",
      }}
    >
      <h1>{title}</h1>
      {videoKey && <VideoSection videoKey={videoKey} />}
      <Card
        sx={{
          maxWidth: 945,
          borderRadius: "10px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              // height="140"
              image={poster_path ? baseImageUrl + poster_path : defaultImage}
              alt="green iguana"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h3>Overview</h3>
                <p>{overview}</p>
              </Typography>
              <ul>
                <li>{"Release Date : " + release_date}</li>
                <li>{"Rate : " + vote_average}</li>
                <li>{"Total Vote : " + vote_count}</li>
              </ul>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                sx={{ alignItems: "center" }}
                onClick={() => navigate(-1)}
                size="large"
              >
                Go Back
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
