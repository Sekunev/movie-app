import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";

const Search = ({ search, setSearch }) => {
  console.log("search :>> ", search);

  const { loading } = useAuthContext();
  console.log("loading :>> ", loading);
  // const [loading, setLoading] = useState(true);

  return (
    <form>
      <div
        style={{
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          flexWrap: "wrap",
          marginTop: "1rem",
        }}
      >
        <Paper
          // component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Movie"
            inputProps={{ "aria-label": "search Movie" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Divider sx={{ height: 32, m: 0.5 }} orientation="vertical" />
          <IconButton sx={{ "& > button": { m: 1 } }}>
            <SearchSharpIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </Paper>
      </div>
    </form>
  );
};

export default Search;
