import React, { useState } from "react";
import { AppBar, Typography } from "@mui/material";
import { useStyles } from "./Navbar.style";
import LoginModal from "../Auth/Login/LoginModal";

const Navbar = () => {
  const { classes } = useStyles();
  const [showModal, setShowModal] = useState(false);

  const openLoginModal = () => {
    setShowModal(true);
  };

  const closeLoginModal = () => {
    setShowModal(false);
  };

  return (
    <AppBar position="static" className={classes.navbarContainer}>
      <Typography onClick={openLoginModal} className={classes.login}>
        Login
      </Typography>
      <LoginModal open={showModal} onClose={closeLoginModal} />
    </AppBar>
  );
};

export default Navbar;
