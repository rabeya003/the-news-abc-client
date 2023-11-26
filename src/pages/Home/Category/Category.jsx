import { useParams } from "react-router-dom";

const Category = () => {
  const { id } = useParams();
  return (
    <div>
      <h3>category {id}</h3>
    </div>
  );
};

export default Category;
