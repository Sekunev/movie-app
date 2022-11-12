import { Grid } from "@mui/material";
import React from "react";

const VideoSection = ({ videoKey }) => {
  return (
    <Grid item>
      {/* <Grid item xs={6}> */}
      {/* <Box> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
        title="YouTube video"
        allowFullScreen
        style={{
          minWidth: "412px",
          height: "330px",
          borderRadius: "15px",
          border: "3px solid #9b57a7",
          marginBottom: "0.5rem",
        }}
      ></iframe>
      {/* </Box> */}
      {/* </Grid> */}
    </Grid>
  );
};

export default VideoSection;
