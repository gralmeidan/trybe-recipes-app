import mealdbResponse from "./mealdbResponse"
import cocktaildbResponse from './cocktaildbResponse'

export const MEALDB_REQUEST_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
export const COCKTAILDB_REQUEST_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const mockFetch = (url) => Promise.resolve({
  json: () => {
    switch (url) {
      case MEALDB_REQUEST_URL:
        return Promise.resolve(mealdbResponse);   
      case COCKTAILDB_REQUEST_URL:
        return Promise.resolve(cocktaildbResponse);
      default:
        break;
    }} 
})

export default mockFetch