import { Params } from "../constants/parameters";

export const getTopNews = async theme => {
  const call = await fetch(
    `${Params.BASE_API_URL}?country=${theme}&apiKey=${Params.API_KEY}`
  );
  const json = await call.json();
  const result = json.articles;

  return result;
};

export const getCategorieNews = async (theme, category) => {
  const call = await fetch(
    `${Params.BASE_API_URL}?country=${theme}&category=${category}&apiKey=${Params.API_KEY}`
  );
  const json = await call.json();
  const result = json.articles;

  return result;
};

export const getSearchResaults = async (theme, q) => {
  const call = await fetch(
    `${Params.BASE_API_URL}?country=${theme}&q=${q}&apiKey=${Params.API_KEY}`
  );
  const json = await call.json();
  const result = json.articles;

  return result;
};
