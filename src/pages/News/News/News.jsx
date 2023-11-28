import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import NewsEditor from "../NewsEditor/NewsEditor";
const News = () => {
  const news = useLoaderData();
  const { _id, title, details, image_url, category_id } = news || {};
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/categories/${category_id}`}>
            <Button variant="danger">
              <FaLongArrowAltLeft></FaLongArrowAltLeft> All news in this
              category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <NewsEditor></NewsEditor>
    </div>
  );
};

export default News;
