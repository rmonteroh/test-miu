/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { Sidebar, Topbar } from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: "100%"
  }
}));

const Main = props => {
  const clases = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true
  });
  const [openSidebar, setOpenSideBar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSideBar(true);
  };
  const handleSidebarClose = () => {
    setOpenSideBar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;
  const { children } = props;

  return (
    <div
      className={clsx({
        [clases.root]: true,
        [clases.shiftContent]: isDesktop
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} />
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? "persistent" : "temporary"}
      />
      <main className={clases.content}>{children}</main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired
};

export default Main;
