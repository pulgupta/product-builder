import React from "react";
import { Paper, Box, Grid, Typography } from "@material-ui/core";
import { ImgStyled, DivStyled } from "./productCard.styles";

const ProductCard = (props) => {
  return (
    <DivStyled>
      <Paper elevation={4} spacing={2}>
        <Box p={2} m={1}>
          <Grid container spacing={4}>
            <Grid item>
              <ImgStyled src="200-x-1501.png" alt="banner" />
            </Grid>
            <Grid item sm>
              <Grid item xs container spacing={2}>
                <Grid item xs={10}>
                  <Typography gutterBottom variant="subtitle1">
                    Best monitor stand
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography gutterBottom variant="subtitle1">
                    $99.99
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  ----
                </Grid>
                <Grid item xs={12}>
                  Can hold 20 kgs and monitor of size 21'' to 34''
                </Grid>
                <Grid item xs={12}>
                  Limited offer for next two days
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </DivStyled>
  );
};

export default ProductCard;
