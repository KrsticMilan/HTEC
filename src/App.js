import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

import "./App.css";
import { TopNews } from "./containers/TopNews/TopNews";
import { Header } from "./components/Header/Header";
import { NewsDetails } from "./components/NewsDetails/NewsDetails";
import { NewsCategories } from "./containers/NewsCategories/NewsCategories";
import { NewsSearch } from "./containers/NewsSearch/NewsSearch";
import { ThemeContext } from "./ThemeContext";
import { Paths } from "./constants/navigations";

const details = {
  left: [
    {
      title: "Top News",
      linkTo: "/top-news"
    },
    {
      title: "Categories",
      linkTo: "/categories"
    },
    {
      title: "Search",
      linkTo: "/search"
    }
  ],
  right: [
    {
      title: "gb"
    },
    {
      title: "us"
    }
  ]
};

export const App = () => {
  const themeHook = useState("us");
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={themeHook}>
        <Header details={details} />

        <Route path={Paths.HOME} exact render={() => <h1>Home</h1>} />
        <Route path={Paths.TOP_NEWS} exact component={TopNews} />
        <Route path={Paths.CATEGORIES} exact component={NewsCategories} />
        <Route path={Paths.SERCH} exact component={NewsSearch} />
        <Route path={Paths.NEWS_DETAILS} exact component={NewsDetails} />
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};
