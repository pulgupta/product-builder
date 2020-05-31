import React from "react";
import { Paper, Box, FormControlLabel, Checkbox } from "@material-ui/core";

const SideNav = (props) => {
  return (
    <Paper elevation={4}>
      <Box p={2} m={2}>
          <p>Narrow down your Search</p>
        <FormControlLabel
          control={<Checkbox checked={true} name="checkedB" color="primary" />}
          label="Prime"
        />
        <FormControlLabel
          control={<Checkbox checked={false} name="checkedB" color="primary" />}
          label="One day delivery"
        />
      </Box>
    </Paper>
  );
};

export default SideNav;
