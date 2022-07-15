const getDrink = async (id) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await response.json();
  return data;
};

export default getDrink;
