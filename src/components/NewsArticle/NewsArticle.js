import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import styles from "./NewsArticleComponent.module.css";

export const NewsArticle = props => {
  const { article, onClickHandler } = props;
  return (
    <Card bg={"dark"} text={"white"}>
      <Card.Img
        className={styles.cardImage}
        variant="top"
        src={article.urlToImage}
        alt={article.source.name}
      />
      <Card.Body>
        <Card.Title className={styles.cardTitle}>
          <p>{article.title}</p>
        </Card.Title>
        <Card.Text className={styles.cardText}>{article.description}</Card.Text>
        <Button variant="light" onClick={() => onClickHandler(article)}>
          More
        </Button>
      </Card.Body>
    </Card>
  );
};
