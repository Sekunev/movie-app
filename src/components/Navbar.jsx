import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../context/AuthContext";
import { signOutUser } from "../auth/firebase";

export default function Navbar() {
  const navigate = useNavigate();
  const { loggedUser } = useAuthContext();

  // console.log("loggedUser :>> ", loggedUser);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button onClick={() => navigate("/")} size="large" color="inherit">
              React Movie App
            </Button>
          </Typography>
          {loggedUser ? (
            <>
              <Button color="inherit">{loggedUser?.email}</Button>
              <Button onClick={() => signOutUser()} color="inherit">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button onClick={() => navigate("/login")} color="inherit">
                Login
              </Button>
              <Button onClick={() => navigate("/register")} color="inherit">
                Register
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
