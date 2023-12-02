import { useContext } from "react";
import { ContextProvider } from "../../Providers/Authprovider";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(ContextProvider);
  const [sucsess, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  // const [accepted, setAccepted] = useState(false);

  const handleLog = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    login(email, password)
      .then((result) => {
        const user = result.user;
        setSuccess("user succesfully registerd");
        e.target.reset();
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // const handleAccept = (e) => {
  //   setAccepted(e.target.checked);
  // };
  return (
    <div>
      <form onSubmit={handleLog}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            // onClick={handleAccept}
            name="accept"
            type="checkbox"
            label="Check me out"
          />
        </Form.Group>
        <Button
          className="mb-2"
          // disabled={!accepted}
          variant="primary"
          type="submit"
        >
          Login
        </Button>
        <br></br>
        <Link to="/reg" variant="primary">
          New to this website go Register
        </Link>
      </form>
      <p>{error}</p>
      <p>{sucsess}</p>
    </div>
  );
};

export default Login;
