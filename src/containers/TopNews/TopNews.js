import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { ThemeContext } from "../../ThemeContext";

import { NewsArticle } from "../../components/NewsArticle/NewsArticle";
import { Paths } from "../../constants/navigations";
import { getTopNews, getCategorieNews } from "../../services/ContentService";

export const TopNews = props => {
  const [theme] = useContext(ThemeContext);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (!props.location.state) {
      getTopNews(theme).then(data => {
        setArticles(data);
        setIsloading(false);
      });
    } else {
      getCategorieNews(theme, props.location.state.category).then(data => {
        setArticles(data);
        setIsloading(false);
      });
    }
  }, [theme, props.location.state]);

  const onClickHandler = article => {
    history.push(Paths.NEWS_DETAILS, article);
  };

  if (isLoading) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div>
      <h3>
        Search Top News From {theme.toUpperCase()}
        {props.location.state
          ? ` in ${props.location.state.category.toUpperCase()} category`
          : ""}
      </h3>
      <div className="newsArticleWraper">
        {articles.map((article, i) => {
          return (
            <div
              key={`article_${i}`}
              style={{ margin: "30px", width: "35rem" }}
            >
              <NewsArticle
                key={`article_${i}`}
                article={article}
                onClickHandler={onClickHandler}
              ></NewsArticle>
            </div>
          );
        })}
      </div>
    </div>
  );
};
