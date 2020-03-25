import React, { useEffect, useState, useContext } from "react";
import { getSearchResaults } from "../../services/ContentService";
import { ThemeContext } from "../../ThemeContext";
import { NewsArticle } from "../../components/NewsArticle/NewsArticle";
import { Paths } from "../../constants/navigations";
import { useHistory } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import FormControl from "react-bootstrap/FormControl";
import styles from "./NewsSearch.module.css";

export const NewsSearch = () => {
  const [q, setQ] = useState("");
  const [theme] = useContext(ThemeContext);
  const [articles, setArticles] = useState([]);
  const history = useHistory();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    getSearchResaults(theme, q).then(data => {
      setArticles(data);
      setIsloading(false);
    });
  }, [q, theme]);

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
        Search top news from {theme === "us" ? "United States" : "Great Britan"}{" "}
        by term:
      </h3>
      <div className={styles.inputWraper}>
        <FormControl
          className={styles.formControl}
          placeholder="Search News..."
          aria-label="Search News..."
          aria-describedby="basic-addon1"
          onKeyUp={e => setQ(e.target.value)}
        />
      </div>
      <div className="newsArticleWraper">
        {articles.map((article, i) => {
          return (
            <div className={styles.newArticleWraper} key={`article_${i}`}>
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
