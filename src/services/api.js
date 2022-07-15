const fetchRecipes = async (type, query = '') => {
  const URL = `https://www.the${type}db.com/api/json/v1/1/search.php?s=${query}`;
  const LIMIT = 12;
  return fetch(URL)
    .then((data) => data.json())
    .then(
      ({ [type === 'meal' ? 'meals' : 'drinks']: response }) => response.slice(0, LIMIT),
    )
    .catch(console.error);
};

export const fetchCategories = async (type) => {
  const URLs = {
    meal: 'https://www.themealdb.com/api/json/v1/1/categories.php',
    cocktail: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
  };
  return fetch(URLs[type])
    .then((data) => data.json())
    .then(
      ({ [type === 'meal' ? 'categories' : 'drinks']: response }) => response,
    )
    .catch(console.error);
};

export default fetchRecipes;
