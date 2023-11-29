import { useContext } from "react";
import { ContextProvider } from "../../Providers/Authprovider";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { sendEmailVerification } from "firebase/auth";
import { Link } from "react-router-dom";

const Register = () => {
  const { creatUser } = useContext(ContextProvider);
  const [sucsess, setSuccess] = useState("");
  const [error, setError] = useState("");
  const handleReg = (e) => {
    setError("");
    setSuccess("");
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    console.log(email, password, name);
    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        setSuccess("user succesfully registerd");
        e.target.reset();
        emailVeri(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const emailVeri = (user) => {
    sendEmailVerification(user)
      .then(() => {
        setSuccess("Check your mail");
      })
      .catch((error) => {
        setError(error);
      });
  };
  return (
    <div>
      <Form onSubmit={handleReg}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            required
            placeholder="Enter Your name"
          />
        </Form.Group>
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
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <br></br>
        <Link to="/login" variant="primary">
          New to this website go login
        </Link>
        <p>{error}</p>
        <p>{sucsess}</p>
      </Form>
    </div>
  );
};

export default Register;
