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

export default fetchRecipes;
