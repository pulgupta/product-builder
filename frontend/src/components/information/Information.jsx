import React from "react";
import { Grid } from "@material-ui/core";

const Information = () => {

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} data-testid="informationDetails">
        <p>This will be the product page. Highlighing the features of the product and showing all the reviews and other details.</p>
      </Grid>
    </Grid>
  );
};

export default Information;
