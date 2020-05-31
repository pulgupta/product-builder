import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { RootElement, TypographyStyled } from "./applicationBar.styles";
import { LinkStyled } from "../../shared/common.styles";
import { Switch, FormControlLabel } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { updateDeliveryOptions } from "../../store/actions/appActions";
import SearchAutoComplete from "../../shared/searchAutoComplete/SearchAutoComplete";

export default function ApplicationBar() {
  const dispatch = useDispatch();
  const delivery = useSelector((state) => state.delivery);
  const auth = useSelector((state) => state.authentication);

  const handleChange = (event) => {
    dispatch(updateDeliveryOptions(event.target.checked));
  };

  return (
    <RootElement>
      <AppBar position="sticky">
        <Toolbar>
          <LinkStyled to="/">
            <TypographyStyled>App Icon</TypographyStyled>
          </LinkStyled>
          <TypographyStyled variant="body1">
            <LinkStyled to="/shop">Shop</LinkStyled>
            <LinkStyled to="/shop/how-it-works">Details</LinkStyled>
          </TypographyStyled>
          <TypographyStyled variant="span">
            <SearchAutoComplete />
          </TypographyStyled>
          <FormControlLabel
            control={
              <Switch
                checked={delivery}
                onChange={handleChange}
                name="deliveryNonDelivery"
              />
            }
            label="Show only delivery options"
          />
          {!auth.isAuthenticated && <LinkStyled to="/login">Login</LinkStyled>}
          {auth.isAuthenticated && (
            <LinkStyled to="/logout">{auth.username}</LinkStyled>
          )}
        </Toolbar>
      </AppBar>
    </RootElement>
  );
}
