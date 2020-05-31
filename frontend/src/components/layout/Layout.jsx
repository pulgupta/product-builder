import React from "react";

import Container from "@material-ui/core/Container";
import { Paper, Box, Grid } from "@material-ui/core";
import RouterSetup from "../router/RouterSetup";
import TopBanner from "../appBanner/topBanner/TopBanner";
import SideNav from "../sideNav/SideNav";

const Layout = (props) => {
  return (
    <>
      <TopBanner />
      <Container maxWidth={"xl"}>
        <Grid container spacing={2}>
          <Grid item md={2}>
            <SideNav/>
          </Grid>
          <Grid item md={10}>
            <Paper elevation={4}>
              <Box p={2} m={2}>
                <RouterSetup />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Layout;
