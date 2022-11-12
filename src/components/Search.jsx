import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { Button } from "@mui/material";

const Search = ({ search, setSearch, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
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
            width: 380,
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
          <Button type="submit" sx={{ "& > button": { m: 1 } }}>
            <SearchSharpIcon sx={{ fontSize: "1.5rem" }} />
          </Button>
        </Paper>
      </div>
    </form>
  );
};

export default Search;
