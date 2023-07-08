//prop validations
import PropTypes from "prop-types";

//image
import SuccessIcon from "../assets/images/icon-success.svg";

//components
import Card from "../components/Card";

const Success = ({ email, handleDismiss }) => {
  return (
    <div className="success-center">
      <Card>
        <div className="success-container">
          <div className="content-container">
            <img src={SuccessIcon} alt="success-icon" />

            <p className="title page-title">Thanks for subscribing!</p>

            <p className="success-text">
              A confirmation email has been sent to{" "}
              <span className="title">{email}</span>. Please open it and click
              the button inside to confirm your subscription.
            </p>
          </div>
          <div className="button-container">
            <button className="title submit-button" onClick={handleDismiss}>
              Dismiss message
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

Success.propTypes = {
  email: PropTypes.string,
  handleDismiss: PropTypes.func,
};

Success.defaultProps = {
  email: "",
  handleDismiss: () => {},
};

export default Success;
