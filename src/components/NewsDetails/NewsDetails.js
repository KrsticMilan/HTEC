import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";

import styles from "./NewsDetailsComponent.module.css";
import Button from "react-bootstrap/Button";

export const NewsDetails = props => {
  const location = useLocation();
  const [article, setArticle] = useState({});

  useEffect(() => {
    setArticle(location.state);
  }, [location]);

  return (
    <div className={styles.cardFlex}>
      <Card className={styles.cardLayout} bg={"dark"} text={"white"}>
        <Card.Img variant="top" src={article.urlToImage} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.content}</Card.Text>
          <Button variant="light" onClick={() => props.history.goBack()}>
            Back to list
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
