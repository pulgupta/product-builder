import React from "react";

import Container from "@material-ui/core/Container";
import { Paper, Box, Grid } from "@material-ui/core";

const LandingPage = (props) => {
  return (
    <>
      <Container maxWidth={"xl"}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={4}><Box p={4} m={2}>Landing Page</Box></Paper>
          </Grid>
          <Grid container spacing={4}>
          <Grid item xs={6}>
            <Paper elevation={4}><Box p={4} m={2}>Landing Page</Box></Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={4}><Box p={4} m={2}>Landing Page</Box></Paper>
          </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={4}><Box p={4} m={2}>Landing Page</Box></Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default LandingPage;
