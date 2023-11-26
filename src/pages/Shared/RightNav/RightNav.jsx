import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <div className="mt-4">
        <h4>Login with</h4>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>{" "}
        <Button variant="outline-secondary">
          <IoLogoGithub /> Login with Github
        </Button>{" "}
      </div>

      <div className="mt-4">
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebookF /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <IoLogoTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaInstagramSquare />
            Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>

      <QZone></QZone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
