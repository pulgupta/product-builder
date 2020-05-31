import React, { useEffect } from "react";
import { Container, Paper, Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { updateOfferDetailsAsync } from "../../../store/actions/appActions";

const TopBanner = () => {
  const dispatch = useDispatch();
  let offer = useSelector((store) => store.offer);

  useEffect(() => {
    /**
     * Since we do not have props or any other way to check if the data has changed
     * so we are restricting this ourselves. Ideally useEffect could have done this 
     * automatically by seeing a change in props etc
     */
    if (offer.offerDescription === "") dispatch(updateOfferDetailsAsync());
  }, [dispatch, offer]);

  return (
    <Container maxWidth={"xl"}>
      <Paper elevation={5}>
        <Box p={2} m={2}>
          <p>{offer.offerTitle}</p>
          <p>{offer.offerDescription}</p>
        </Box>
      </Paper>
    </Container>
  );
};

export default TopBanner;
