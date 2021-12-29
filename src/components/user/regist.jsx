import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../../store/userSlice";
import { Alert } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
// import { useNavigate } from "react-router";
import axios from "axios";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "white",
    width: 800,
    backgroundColor: "#212121",
    borderRadius: 15,
    padding: (20, 20, 20, 20),
    // mt:2,
  },
  white: {
    color: "#fffff",
  },
});

export default function Login() {
  const styles = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [errorAuth, setErrorAuth] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(false);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const isLogin = useSelector((state) => state.user.isLogin);

  // if (isLogin) {
  //   console.log("masuk");
  //   console.log(isLogin);
  //   navigate("/");
  // }
  const registerHandler = (e) => {
    console.log("masuk");
    e.preventDefault();
    setLoadingAuth(true);
    axios
      .post("https://61cad8a8194ffe0017788995.mockapi.io/user", {
        email: email,
        name: name,
        phone: phone,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        setLoadingAuth(false)
      })
      .catch(function (error) {
        console.log(error);
        setErrorAuth(error)
      });
  };

  const isLoading = loadingAuth;
  const isError = errorAuth;

  return (
    <Container className={styles.container}>
      <Box>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          color="white"
          //   sx={{ textAlign: "center" }}
        >
          Create Account
        </Typography>
      </Box>
      <FormControl fullWidth onSubmit={registerHandler} noValidate>
        <TextField
          margin="normal"
          fullWidth
          required
          id="name"
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          autoComplete="name"
          autoFocus
          // color="outline"
          variant="outlined"
          //bg fieldnya wa ganti putih dulu biar keliatan, tar kalo theme ui nya udah ditentuin baru wa ganti
          sx={{backgroundColor: "white", borderRadius: 1}}
        />
        <TextField
          margin="normal"
          fullWidth
          required
          id="phone"
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          name="phone"
          autoComplete="phone"
          autoFocus
          // color="outline"
          variant="outlined"
          sx={{backgroundColor: "white", borderRadius: 1}}
        />
        <TextField
          margin="normal"
          fullWidth
          required
          id="email"
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          autoComplete="email"
          autoFocus
          // color="outline"
          variant="outlined"
          sx={{backgroundColor: "white", borderRadius: 1}}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          //   type="password"
          id="password"
          autoComplete="current-password"
          // color="outline"
          variant="outlined"
          sx={{backgroundColor: "white", borderRadius: 1}}
        />
        {isLoading && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <LoadingButton loading variant="outlined"
            sx={{backgroundColor: "white", borderRadius: 1}} color="primary">
              Sign Up
            </LoadingButton>
          </Box>
        )}
        {isError && (
          <Alert variant="standard" severity="error">
            Something went wrong, please try again later.
          </Alert>
        )}
        {!isLoading && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={registerHandler}
              //   type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
              // onSubmit={registerHandler}
            >
              Sign Up
            </Button>
          </Box>
        )}
      </FormControl>
    </Container>
  );
}
