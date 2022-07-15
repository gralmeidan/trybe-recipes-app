const fetchRecipes = async (type, query, category) => {
  const URL = !category || category === 'All'
    ? `https://www.the${type}db.com/api/json/v1/1/search.php?s=${query}`
    : `https://www.the${type}db.com/api/json/v1/1/filter.php?c=${category}`;
  const LIMIT = 12;
  return fetch(URL)
    .then((data) => data.json())
    .then(
      ({ [type === 'meal' ? 'meals' : 'drinks']: response }) => response.slice(0, LIMIT),
    )
    .catch(console.error);
};

export const fetchCategories = async (type) => {
  const URL = `https://www.the${type}db.com/api/json/v1/1/list.php?c=list`;
  const LIMIT = 5;
  return fetch(URL)
    .then((data) => data.json())
    .then(
      (obj) => Object.values(obj)[0],
    )
    .then((arr) => arr.slice(0, LIMIT))
    .then((arr) => [...arr, {
      strCategory: 'All',
    }])
    .catch(console.error);
};

export default fetchRecipes;
