import { Alert, Button, Grid, Snackbar, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, login } from "../../Redux/Auth/Action";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const { auth } = useSelector((store) => store);
  const handleCloseSnakbar = () => setOpenSnackBar(false);
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  useEffect(() => {
    if (auth.user || auth.error) setOpenSnackBar(true);
  }, [auth.user]);

  const handelSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    // console.log(auth.user);
    dispatch(login(userData));
  };

  return (
    <div className="m-3">
      <form onSubmit={handelSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="passwords"
              type="password"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{
                padding: ".8rem 0",
                backgroundColor: "#03424C",
                fontSize: "1rem",
                fontWeight: "600",
                borderRadius: "10px",
                color: "white",
                "&:hover": {
                  backgroundColor: "#163336",
                  color: "white",
                  scale: "1.01",
                  transition: "all 0.3s ease-in-out",
                },
                "&:active": {
                  scale: "0.99",
                  transition: "all 0.3s ease-in-out",
                },
              }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center">
        <div className="py-3 pb-1 flex items-center justify-center">
          <p>Don't have an account ?</p>
          <Button
            onClick={() => navigate("/register")}
            variant="text"
            className="ml-5"
            size="small"
            sx={{ fontFamily: "Arial", fontWeight: "600" }}
          >
            Register
          </Button>
        </div>
      </div>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseSnakbar}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          {auth.error ? auth.error : auth.user ? "Register Success" : ""}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default LoginForm;
