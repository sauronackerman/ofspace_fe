import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Link,
  Button,
  FormControlLabel,
  Checkbox,
  FormControl,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import LoadingButton from "@mui/lab/LoadingButton";
// // import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// // import LoadingButton from "@mui/lab/LoadingButton";
// // import { login } from "../../store/userSlice";
// import axios from "axios";

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
    mt: 2,
  },
  white: {
    color: "#fffff",
  },
});

export default function Login() {
  const styles = useStyles();
    const [loading, setLoading] = useState(false);
  //   // const [user, setUser] = useState({ name: "", id: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   // const navigate = useNavigate();
  //   // const isLogin = useSelector((state) => state.user.isLogin);
  //   // const dispatch = useDispatch();
  //   // const { id, name, role, premium, expired } = userById.moviedb_user;
  //   // const data = userById

  //   // useEffect(() => {
  //   //   if (userById?.moviedb_user) {
  //   //     dispatch(
  //   //       login({
  //   //         name: user.name,
  //   //         id: user.id,
  //   //         role: user.role,
  //   //         premium: user.premium,
  //   //         expired: user.expired,
  //   //       })
  //   //     );
  //   //     // localStorage.setItem('isLogin', true);
  //   //     // console.log(localStorage.getItem('islogin'));
  //   //     // setLogin(true)
  //   //     // console.log(isLogin);
  //   //   }
  //   //   setLoading(false);
  //   // }, [dispatch, userById]);

  //   // if (isLogin) {
  //   //   console.log("masuk");
  //   //   console.log(isLogin);
  //   //   navigate("/");
  //   // }
  const loginHandler = (e) => {
    e.preventDefault();
    console.log(email + " " + password);
    setLoading(true);
    axios
      .get(`https://61cad8a8194ffe0017788995.mockapi.io/user/${email}`)
      .then(function (response) {
        console.log(response);
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false)
      });
  };
  return (
    <Container className={styles.container}>
      <Box>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          // color="white"
          //   sx={{ textAlign: "center" }}
        >
          Welcome Back
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="div"
          // color="gray"
          //   sx={{ textAlign: "center" }}
        >
          Login with email
        </Typography>
        <FormControl fullWidth noValidate sx={{ mt: 1 }}>
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
            //bg fieldnya wa ganti putih dulu biar keliatan, tar kalo theme ui nya udah ditentuin baru wa ganti
            sx={{backgroundColor: "white", borderRadius: 1}}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            //   type="password"
            id="password"
            autoComplete="current-password"
            // color="outline"
            variant="outlined"
            sx={{backgroundColor: "white", borderRadius: 1}}
          />
          <Grid container>
            <Grid item xs>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            </Grid>
            <Grid item>
              <Link
                href="#"
                color="#ABABB1"
                sx={{ textDecoration: "none", fontWeight: "bold" }}
              >
                Forgot password?
              </Link>
            </Grid>
          </Grid>
          {loading && (
            <LoadingButton loading variant="outlined"
            sx={{backgroundColor: "white", borderRadius: 1}} color="primary">
              Sign In
            </LoadingButton>
          )}
          {/* {!loading && ( */}
          <Button
            onClick={loginHandler}
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          {/* )} */}
        </FormControl>
      </Box>
    </Container>
  );
}
