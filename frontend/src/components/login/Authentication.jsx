import React from "react";
import { Grid, Container, Paper, Box } from "@material-ui/core";
import Register from "./register/Register";
import Login from "./Login";

const Authentication = () => {
  return (
    <Container maxWidth={"xl"}>
      <Paper elevation={4}>
        <Box p={1} m={1} mt={6} pb={4} pt={4}>
          <Grid container spacing={2}>
            <Grid item lg={1}></Grid>
            <Grid item lg={4}>
              <Register />
            </Grid>
            <Grid item lg={2}></Grid>
            <Grid item lg={4}>
              <Login />
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default Authentication;
