/* eslint-disable no-console */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

const RouteWithLayout = props => {
  const { layout: Layout, component: Component, ...rest } = props;
  console.log(props);
  return (
    <Route
      {...rest}
      render={() => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default RouteWithLayout;
