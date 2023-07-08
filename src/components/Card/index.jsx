import PropTypes from "prop-types";

const Card = ({ className, children }) => {
  return <span className={`card ${className}`}>{children}</span>;
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Card.defaultProps = {
  children: <></>,
  className: "",
};

export default Card;
