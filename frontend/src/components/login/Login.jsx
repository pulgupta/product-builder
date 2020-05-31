import React, { useState } from "react";
import { TextField, Button, Grid, FormControl } from "@material-ui/core";
import { authenticateUserAsync } from "../../store/actions/appActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
/**
 * React does not have a validation framework so we will have to do the
 * validation ourselves
 * We will plan 2 validations for both the field
 * 1. Length more than 8
 * 2. Required
 */
const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  let authState = useSelector((store) => store.authentication);

  const [state, setState] = useState({
    username: "",
    password: "",
    valid: true,
  });

  useEffect(() => {
    if (authState.isAuthenticated) {
      history.push("/");
    }
  });

  const validate = () => {
    console.log("[validate]", state.password);
    if (state.password.length < 8 || state.username.length < 8) {
      setState({
        ...state,
        valid: false,
      });
      return false;
    } else {
      setState({
        ...state,
        valid: true,
      });
      return true;
    }
  };

  const handleInput = (event) => {
    if (event.target.id === "username") {
      console.log("setting username", event.target.value);
      setState({
        ...state,
        username: event.target.value,
      });
    }
    if (event.target.id === "password") {
      console.log("setting password");
      setState({
        ...state,
        password: event.target.value,
      });
    }
  };

  const formSubmit = () => {
    console.log(state);
    if (validate()) {
      dispatch(authenticateUserAsync(state));
    }
  };

  return (
    <div>
      <p>Returning users, please sign in.</p>
      <form>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined">
            <TextField
              error={!state.valid}
              id="username"
              label="Username/Email"
              value={state.username}
              variant="outlined"
              onChange={handleInput}
              helperText={
                !state.valid && "Username should be more than 8 characters"
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined">
            <TextField
              error={!state.valid}
              id="password"
              label="Password"
              value={state.password}
              variant="outlined"
              type="password"
              onChange={handleInput}
              helperText={
                !state.valid && "Password should be more than 8 characters"
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={formSubmit}>
            Sign In
          </Button>
        </Grid>
      </Grid>
      </form>
    </div>
  );
};

export default Login;
