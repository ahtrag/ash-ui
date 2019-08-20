import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const IconView = props => {
  const { children, ...otherProps } = props;
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const iconName = _.startCase(children).replace(" ", "");
    import(`mdi-react/${iconName}Icon`)
      .then(module => setComponent(module.default))
      .catch(() =>
        console.error(
          "Icon Not Found",
          "Please refer to https://materialdesignicons.com/"
        )
      );
  }, [children]);

  if (Component) {
    return <Component {...otherProps} />;
  }

  return null;
};

IconView.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  style: PropTypes.object
};

export default IconView;
