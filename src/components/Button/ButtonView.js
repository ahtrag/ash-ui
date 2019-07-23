import React from "react";
import PropTypes from "prop-types";
import { useGlobalStyles } from "../../utils/styles";

const ButtonView = props => {
  const { children, type, className, style, onClick } = props;
  const styles = useGlobalStyles();

  return (
    <button
      type={type}
      className={`${styles.mdPadAll} ${styles.lgPadLeft} ${styles.lgPadRight} ${
        styles.shadowLower
      } ${styles.gradAsh} ${styles.clWhite} ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

ButtonView.defaultProps = {
  type: "button",
  className: ""
};

ButtonView.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["button", "submit"]),
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
};

export default ButtonView;
