import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Drawer } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import ImageIcon from "@material-ui/icons/Image";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SettingsIcon from "@material-ui/icons/Settings";
import LockOpenIcon from "@material-ui/icons/LockOpen";

import { Profile, SidebarNav } from "./components";

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up("lg")]: {
      marginTop: 64,
      height: "calc(100% - 64px)"
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;
  console.log(props);
  
  const clases = useStyles();
  const pages = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <DashboardIcon />
    },
    {
      title: "Users",
      href: "/users",
      icon: <PeopleIcon />
    },
    {
      title: "Products",
      href: "/products",
      icon: <ShoppingBasketIcon />
    },
    {
      title: "Authentication",
      href: "/sign-in",
      icon: <LockOpenIcon />
    },
    {
      title: "Typography",
      href: "/typography",
      icon: <TextFieldsIcon />
    },
    {
      title: "Icons",
      href: "/icons",
      icon: <ImageIcon />
    },
    {
      title: "Account",
      href: "/account",
      icon: <AccountBoxIcon />
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <SettingsIcon />
    }
  ];
  return (
    <Drawer
      anchor="left"
      classes={{ paper: clases.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(clases.root, className)}>
        <Profile />
        <Divider className={clases.divider} />
        <SidebarNav className={clases.nav} pages={pages} />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  variant: PropTypes.string
};

Sidebar.defaultProps = {
  className: ""
};

export default Sidebar;
