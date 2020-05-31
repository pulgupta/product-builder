import {
  UPDATE_DELIVERY_CHOICE,
  UPDATE_OFFER_DETAILS,
  AUTHENTICATE_USER,
  LOGOUT_USER,
  TOGGLE_ERROR,
} from "../actions/actionTypes";

const initialState = {
  delivery: true,
  serverError: false,
  offer: {
    offerTitle: "Fetching latest offers for you...",
    offerDescription: "",
  },
  authentication: {
    username: "",
    isAuthenticated: false,
  },
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DELIVERY_CHOICE:
      return {
        ...state,
        delivery: action.payload.delivery,
      };
    case UPDATE_OFFER_DETAILS:
      return {
        ...state,
        offer: action.payload.offer,
      };
    case AUTHENTICATE_USER:
      return {
        ...state,
        authentication: {
          username: action.payload.username,
          isAuthenticated: action.payload.isAuthenticated,
        },
      };
    case LOGOUT_USER:
      return {
        ...state,
        authentication: {
          username: "",
          isAuthenticated: false,
        },
      };
    case TOGGLE_ERROR:
      return {
        ...state,
        serverError: action.payload.error,
      };
    default:
      return state;
  }
};

export default appReducer;
