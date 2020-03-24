import React, { useContext } from "react";
import { NewsCategoryComponent } from "../../components/NewaCategory/NewsCategory";
import { ThemeContext } from "../../ThemeContext";
import { Params } from "../../constants/parameters";

export const NewsCategories = () => {
  const [theme] = useContext(ThemeContext);
  return (
    <div>
      <h3>Top 5 news by categories from {theme.toUpperCase()}</h3>
      {Params.categories.map((category, i) => {
        return (
          <NewsCategoryComponent
            key={`news_categories${i}`}
            category={category}
          />
        );
      })}
    </div>
  );
};
