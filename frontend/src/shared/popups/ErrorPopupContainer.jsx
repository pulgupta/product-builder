import React from "react";
import Popup from "./Popup";
import { useDispatch, useSelector } from "react-redux";
import { toggleError } from "../../store/actions/appActions";

const ErrorPopupContainer = () => {
  const dispatch = useDispatch();
  const errorOccoured = useSelector((state) => state.serverError);

  const handleClose = () => {
    dispatch(toggleError(false));
  };

  return (
    <Popup
      testid="popup"
      open={errorOccoured}
      heading="Well that failed quickly!"
      content="We got some error while contacting the server. Please try after sometime"
      actionText="Return back to application"
      action={handleClose}
      hasAction={true}
    ></Popup>
  );
};

export default ErrorPopupContainer;
