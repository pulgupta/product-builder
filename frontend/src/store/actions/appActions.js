import {
  UPDATE_DELIVERY_CHOICE,
  UPDATE_OFFER_DETAILS,
  AUTHENTICATE_USER,
  LOGOUT_USER,
  TOGGLE_ERROR,
} from "./actionTypes";
import Axios from "axios";

const API_ENDPOINT = "http://localhost:8081/";

const updateDeliveryOptions = (delivery) => {
  return {
    type: UPDATE_DELIVERY_CHOICE,
    payload: {
      delivery: delivery,
    },
  };
};

const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};

const toggleError = (error) => {
  return {
    type: TOGGLE_ERROR,
    payload: {
      error: error,
    },
  };
};

const updateOfferDetailsSync = (offer) => {
  return {
    type: UPDATE_OFFER_DETAILS,
    payload: {
      offer: offer,
    },
  };
};

const updateOfferDetailsAsync = (offer) => {
  return (dispatch) => {
    Axios.get(API_ENDPOINT + "offers")
      .then((data) => {
        dispatch(updateOfferDetailsSync(data.data));
      })
      .catch(() => {
        dispatch(toggleError(true));
      });
  };
};

const authenticateUserSync = (username, isAuthenticated) => {
  return {
    type: AUTHENTICATE_USER,
    payload: {
      username: username,
      isAuthenticated: isAuthenticated,
    },
  };
};

const authenticateUserAsync = (credentials) => {
  return (dispatch) => {
    Axios.post(API_ENDPOINT + "login", credentials)
      .then((result) => {
        dispatch(authenticateUserSync(credentials.username, result.data));
      })
      .catch(() => {
        dispatch(toggleError(true));
      });
  };
};

const registerUserAsync = (user) => {
  console.log("user is ", user);
  return (dispatch) => {
    Axios.post(API_ENDPOINT + "register", user)
      .then((result) => {
        dispatch(authenticateUserSync(user.username, true));
      })
      .catch(() => {
        dispatch(toggleError(true));
      });
  };
};

export {
  updateDeliveryOptions,
  updateOfferDetailsAsync,
  authenticateUserAsync,
  logout,
  registerUserAsync,
  toggleError,
};
