import { useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import { useEffect, useState } from "react";
import { Badge, Card } from "react-bootstrap";

const Category = () => {
  const [category, setCategory] = useState(null);
  const [news, setNews] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/categories/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
        console.log(data);
      });
  }, [id]);
  useEffect(() => {
    fetch("http://localhost:5000/news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      });
  }, []);
  const categoryAllNews = news?.filter((n) => n?.category_id === category?.id);
  console.log(categoryAllNews);

  return (
    <div>
      {categoryAllNews?.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
