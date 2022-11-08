import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { createUser } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

export default function Register() {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });
  // console.log("values", values);

  const { email, password } = values;

  const navigate = useNavigate();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createUser(email, password, navigate);
    // console.log(email, password);
  };

  return (
    <Box
      sx={{
        mt: 5,
      }}
    >
      <Typography align="center" variant="h2" gutterBottom>
        Register
      </Typography>
      <FormControl
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          flexWrap: "wrap",
          // mt: 5,
        }}
      >
        <FormControl
          sx={{ m: 1, width: "35ch" }}
          variant="outlined"
          color="secondary"
        >
          <InputLabel htmlFor="outlined-adornment-email">
            E-mail address
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            value={values.email || ""}
            onChange={handleChange("email")}
            label="E-mail address"
            type="email"
          />
        </FormControl>
        <FormControl
          sx={{ m: 1, width: "35ch" }}
          variant="outlined"
          color="secondary"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password || ""}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button
          sx={{ p: 1.5, m: 1, width: "15ch" }}
          variant="outlined"
          color="secondary"
          size="large"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Register
        </Button>
      </FormControl>
    </Box>
  );
}
