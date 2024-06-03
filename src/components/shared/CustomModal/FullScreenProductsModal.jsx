"use client"
import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { BootstrapDialog } from './CustomModal';
import { DialogTitle,DialogContent, IconButton, Slide } from '@mui/material';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const FullScreenProductsModal = ({children, open=false,setOpen, title="",sx}) => {

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
    <BootstrapDialog
      fullScreen
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={{ ...sx }}
      TransitionComponent={Transition}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>{children}</DialogContent>
    </BootstrapDialog>
  </React.Fragment>
  )
}

export default FullScreenProductsModal