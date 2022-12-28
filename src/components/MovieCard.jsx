import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toastWarnNotify } from "../assest/ToastMessage";

const defaultImage =
  "https://image.shutterstock.com/image-vector/movie-film-poster-design-template-600w-1246281046.jpg";

export default function MovieCard({
  original_title,
  overview,
  poster_path,
  vote_average,
  id,
}) {
  const { loggedUser } = useAuthContext();
  const navigate = useNavigate();
  const getVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <Grid display="flex">
      <Card
        onClick={() => {
          navigate("details/" + id);
          !loggedUser && toastWarnNotify("Please log in to see details");
        }}
        sx={{
          // minWidth: 345,
          margin: "2rem",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",

          overflow: "hidden",
          position: "relative",
          flexWrap: "wrap",
          width: "300px",
        }}
      >
        <CardActionArea className="card">
          <CardMedia
            sx={{
              objectfit: "cover",
              height: "450px",
              maxWidth: "100%",
            }}
            component="img"
            image={
              poster_path
                ? `https://image.tmdb.org/t/p/w1280${poster_path}`
                : defaultImage
            }
          />

          <CardActions
            disableSpacing
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#9c27b0",
              color: "darkblue",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: "1.2rem",
              }}
              variant="h4"
              display="block"
              gutterBottom
            >
              {original_title}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                fontSize: "1.2rem",

                "& > :not(style)": {
                  m: 1,
                  width: 50,
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center",
                },
              }}
            >
              {loggedUser && (
                <Paper
                  className={`tag ${getVoteClass(vote_average.toFixed(1))}`}
                  sx={{
                    display: "flex",
                    color: "white",
                  }}
                  elevation={2}
                >
                  <span>{vote_average}</span>
                </Paper>
              )}
            </Box>
          </CardActions>
          <CardContent
            className="cardconten"
            sx={{
              position: "absolute",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              color: "#000",
              bottom: "0",
              left: "0",
              right: "0",
              overflow: "auto",
              maxHeight: "100%",
              padding: "1rem",
              transform: "translateX(100%)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <h2>Overview</h2>
            <Typography display="hidden" variant="body1" color="text.secondary">
              {overview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
