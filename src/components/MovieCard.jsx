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

export default function MovieCard({
  original_title,
  overview,
  poster_path,
  vote_average,
  id,
}) {
  return (
    <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center">
      <Card
        sx={{
          maxWidth: 345,
          margin: "1rem",
          boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <CardActionArea className="card">
          <CardMedia
            sx={{
              objectfit: "cover",
              height: "450px",
              maxidth: "100%",
            }}
            component="img"
            image={`https://image.tmdb.org/t/p/w1280${poster_path}`}
          />

          <CardActions
            disableSpacing
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#999",
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
              <Paper
                sx={{
                  display: "flex",
                }}
                elevation={2}
              >
                <span>{vote_average}</span>
              </Paper>
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
            <Typography display="hidden" variant="body1" color="text.secondary">
              {overview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
