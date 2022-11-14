import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { getUser, signUpWithGoogle } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import GoogleIcon from "../assest/GoogleIcon";
import Footer from "../components/footer/Footer";

export default function Login() {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const { email, password } = values;
  const navigate = useNavigate();

  const { loggedUser } = useAuthContext();

  loggedUser && navigate(-1);

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
    setValues({});
    getUser(email, password, navigate);

    console.log("email :>> ", email);
    console.log("password :>> ", password);
  };
  const handleGoogleProvider = () => {
    signUpWithGoogle(navigate);
  };

  return (
    <>
      <Box
        sx={{
          mt: 5,
          pb: 5,
          background: "white",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <Typography align="center" variant="h2" gutterBottom>
          Login
        </Typography>
        <Box
          component="form"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          <FormControl
            sx={{ m: 1, width: "35ch" }}
            variant="outlined"
            color="secondary"
          >
            <InputLabel htmlFor="outlined-adornment-email">
              Enter your E-mail adress
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              value={email || ""}
              onChange={handleChange("email")}
              label="Enter your E-mail adress"
              required={true}
              autoComplete="email"
            />
          </FormControl>

          <FormControl
            sx={{ m: 1, width: "35ch" }}
            variant="outlined"
            color="secondary"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Enter your Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={password || ""}
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
              label="Enter your Password"
            />
          </FormControl>
          <Button
            sx={{ p: 1.5, m: 1, width: "15ch" }}
            variant="outlined"
            color="secondary"
            size="large"
            onClick={(e) => handleSubmit(e)}
            type="submit"
          >
            Login
          </Button>
          <Button
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 1.5,
              m: 1,
              width: "30ch",
            }}
            variant="outlined"
            color="secondary"
            background="secondary"
            size="large"
            type="button"
            onClick={handleGoogleProvider}
          >
            Continue with Google
            <GoogleIcon />
          </Button>
        </Box>
      </Box>

      <Footer />
    </>
  );
}
