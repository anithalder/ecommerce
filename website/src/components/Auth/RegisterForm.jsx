import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, register } from "../../state/Auth/Action";

function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser());
    }
  }, [jwt, auth.jwt]);

  // useEffect(() => {
  //   if (auth.user) {
  //     navigate("/");
  //   }
  // }, [auth.user]);

  const handelSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(register(userData));
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>

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
              register
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center">
        <div className="py-3 pb-1 flex items-center justify-center">
          <p>Already have an account ?</p>
          <Button
            onClick={() => navigate("/login")}
            variant="text"
            className="ml-5"
            size="small"
            sx={{ fontFamily: "Arial", fontWeight: "600" }}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
