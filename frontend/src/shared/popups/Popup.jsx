import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";

const Popup = (props) => {
  return (
    <Dialog
      data-testid={props.testid}
      open={props.open}
      onClose={props.action}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{props.heading}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {props.content}
        </DialogContentText>
      </DialogContent>
      {props.hasAction && <DialogActions>
        <Button onClick={props.action} color="primary">
          {props.actionText}
        </Button>
      </DialogActions>}
    </Dialog>
  );
};

Popup.propTypes = {
  open: PropTypes.bool.isRequired,
  hasAction: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  actionText: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  testid: PropTypes.string.isRequired
};

export default Popup;
