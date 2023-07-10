import { useState } from "react";

//components
import Attribution from "./pages/attribution";
import Form from "./pages/form";
import Success from "./pages/success";

//styles
import "./App.css";

function App() {
  const [displaySuccess, setDisplaySuccess] = useState(false);

  const [email, setEmail] = useState("");

  const [error, setError] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/; //regex to verify email basically \S is any non-space character

    if (emailRegex.test(email))
      return true; //if valid we return true else false
    else return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const result = validateEmail(email); //check if email valid

    if (result) {
      setDisplaySuccess(true); //if valid we display success screen
    } else {
      setError(true); //if not valid we set Error to true
    }
  };

  const handleDismiss = () => {
    setEmail("");
    setDisplaySuccess(false); //on Dismiss we re-empty the email field and display the form
  };

  return (
    <div className="wrapper">
      {!displaySuccess && (
        <Form
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          error={error}
          setError={setError}
        />
      )}
      {displaySuccess && (
        <Success email={email} handleDismiss={handleDismiss} />
      )}
  
    </div>
  );
}

export default App;
