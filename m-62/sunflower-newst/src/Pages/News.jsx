import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import NewsInsight from "./NewsInsight";

const News = () => {
  const news = useLoaderData();
  const { title,thumbnail_url, image_url, details, category_id } = news;
 

  return (
    <div>
      <Card className="mb-5">
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {details}
          </Card.Text>
          <Button variant="primary"> <Link className="text-white text-decoration-none" to={`/category/${category_id}`}> <FaArrowLeft></FaArrowLeft> All news in this category</Link> </Button>
        </Card.Body>
      </Card>
      <NewsInsight news ={news}></NewsInsight>
    </div>
  );
};

export default News;
