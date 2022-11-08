import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { CardActionArea } from "@mui/material";

export default function MovieCard({
  original_title,
  overview,
  poster_path,
  vote_average,
  id,
}) {
  return (
    <Card sx={{ maxWidth: 345, margin: "1rem auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w1280${poster_path}`}
        />

        <CardContent>
          <Typography display="hidden" variant="body1" color="text.secondary">
            {overview}
          </Typography>
        </CardContent>
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
      </CardActionArea>
    </Card>
  );
}
