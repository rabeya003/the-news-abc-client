import { Button, Nav, Navbar } from "react-bootstrap";
import logo from "../../../assets/logos.png";
import users from "../../../assets/user.png";
import moment from "moment";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextProvider } from "../../../Providers/Authprovider";

const Header = () => {
  const { user } = useContext(ContextProvider);
  return (
    <Container>
      <div className="text-center">
        <img style={{ height: "80px" }} src={logo} alt="" />
        <p>
          <small className="text-secondary">
            Journalism Without Fear or Favour
          </small>
        </p>
        <p>{moment().format("dddd, MMMM, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" pauseOnHover={true} speed={100}>
          I can be a React component,multiple React components or just some
          text.......... Ican be a React Component,Multiple React components
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto gap-2">
              <Link to="/">Home</Link>
              <Link href="#About">About</Link>
              <Link href="#Career">Career</Link>
            </Nav>
            <Nav className="">
              {user && (
                <Nav.Link href="#deets">
                  <img className="w-25" src={users} alt="" />
                </Nav.Link>
              )}
              <Nav.Link eventKey={2} href="#memes">
                {user ? (
                  <Button>Logout</Button>
                ) : (
                  <Link to="/login" variant="secondary">
                    Login
                  </Link>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
