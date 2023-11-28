import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import { FaRegBookmark } from "react-icons/fa6";
import { TbShare2 } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import ReactStarsRating from "react-awesome-stars-rating";

// import { FaStar } from "react-icons/fa";
// import { FaRegStar } from "react-icons/fa6";
const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } =
    news || {};
  return (
    <div>
      <Card className=" mb-4 ">
        <Card.Header className="d-flex align-items-center">
          <Image style={{ height: "40px" }} src={author.img} roundedCircle />

          <div className="ps-2 flex-grow-1">
            <p className="mb-0">{author?.name}</p>
            <p>
              <small>{moment(author?.published_date).format("yyy-MM-D")}</small>
            </p>
          </div>

          <FaRegBookmark />
          <TbShare2 />
        </Card.Header>

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? (
              <div>{details}</div>
            ) : (
              <div>
                {details.slice(0, 250)}....
                <Link to={`/news/${_id}`}>Read More</Link>
              </div>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex">
          <div className="flex-grow-1 align-items-center">
            <ReactStarsRating
              className="flex my-3 "
              value={rating.number}
              isEdit={false}
            />
            <span>{rating?.number}</span>
          </div>
          <div>
            <FaEye />
            {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
