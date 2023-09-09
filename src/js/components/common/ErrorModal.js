import React from "react";
import classes from "../../../styles/components/error-modal.module.scss"
import {Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";

const ErrorModal = ({ isOpen, onClose, errorMessage}) => {
  
  return (
    <Dialog open={isOpen} onClose={onClose} className={classes["error-modal"]}>
      <DialogTitle className={classes["error-modal-title"]}>Error</DialogTitle>
      <DialogContent className={classes["error-modal-message"]}>
        <p>{errorMessage}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" autoFocus
                className={classes["error-modal-button"]}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ErrorModal