import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { getCategorieNews } from "../../services/ContentService";
import { NewsArticle } from "../NewsArticle/NewsArticle";
import { ThemeContext } from "../../ThemeContext";
import { Paths } from "../../constants/navigations";
import { Link, useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

export const NewsCategoryComponent = ({ category }) => {
  const [theme] = useContext(ThemeContext);
  const [topFiveArticles, setTopFiveArticles] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getCategorieNews(theme, category).then(data => {
      const topFiveArticles = data.slice(0, 5);
      setTopFiveArticles(topFiveArticles);
    });
  }, [theme, category]);

  const onClickHandler = article => {
    history.push(Paths.NEWS_DETAILS, article);
  };

  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Accordion defaultActiveKey="1">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
            <Link to={{ pathname: "/top-news", state: { category: category } }}>
              <Button variant="outline-dark">{category.toUpperCase()}</Button>
            </Link>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div className="container">
              <Slider {...settings}>
                {topFiveArticles.map((article, i) => {
                  return (
                    <NewsArticle
                      key={`article_${i}`}
                      article={article}
                      onClickHandler={onClickHandler}
                    ></NewsArticle>
                  );
                })}
              </Slider>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};
