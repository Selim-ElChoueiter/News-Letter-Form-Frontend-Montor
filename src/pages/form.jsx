//prop validations
import PropTypes from "prop-types";

//image
import listIcon from "../assets/images/icon-list.svg";

//components
import Card from "../components/Card";

const Form = ({ email, setEmail, handleSubmit, error, setError }) => {
  const handleInput = (event) => {
    //function that handles the input of the user
    if (error) setError(false); //if there was an error and the user is reentering the value, we remove the error styles

    setEmail(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <div className="illustration-container">{/**Holds image */}</div>
        <div className="text-container">
          <p className="title page-title">Stay updated!</p>
          <p className="text">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <table>
            <tr className="text">
              <td>
                <img src={listIcon} alt="list-icon" />
              </td>
              <td className="table-text">
                Product discovery and building what matters
              </td>
            </tr>
            <tr className="text">
              <td>
                <img src={listIcon} alt="list-icon" />
              </td>
              <td className="table-text">
                Measuring to ensure updates are a success
              </td>
            </tr>
            <tr className="text">
              <td>
                <img src={listIcon} alt="list-icon" />
              </td>
              <td className="table-text">And much more!</td>
            </tr>
          </table>

          <div className="input-container">
            <div className="labels">
              <label htmlFor="inputField" className="title">
                Email address
              </label>
              <p className={`title error-status ${!error && "no-display"}`}>
                Valid email required
              </p>
            </div>
            <input
              type="text"
              placeholder="email@company.com"
              id="inputField"
              className={`text input ${error && "input-error"}`}
              value={email}
              onChange={handleInput}
            />
          </div>
          <input
            type="submit"
            value={"Subscribe to monthly newsletter"}
            className="title submit-button"
          />
        </div>
      </Card>
    </form>
  );
};

Form.propTypes = {
  email: PropTypes.sliing,
  setEmail: PropTypes.func,
  handleSubmit: PropTypes.func,
  error: PropTypes.bool,
  setError: PropTypes.func,
};

Form.defaultProps = {
  email: "",
  setEmail: () => {},
  handleSubmit: () => {},
  error: false,
  setError: () => {},
};

export default Form;
