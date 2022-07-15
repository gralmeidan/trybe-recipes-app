import mealdbResponse from "./mealdbResponse"
import cocktaildbResponse from './cocktaildbResponse'
import { cocktaildbCategories, mealdbCategories } from "./categoriesResponse";
import beefMeals from "../../../cypress/mocks/beefMeals";

export const MEALDB_REQUEST_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
export const COCKTAILDB_REQUEST_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
export const MEALDB_CATEGORIES_REQUEST_URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
export const COCKTAILDB_CATEGORIES_REQUEST_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
export const BEEFMEALS_REQUEST_URL = 'www.thecocktaildb.com/api/json/v1/1/filter.php?c=Beef'

const mockFetch = (url) => Promise.resolve({
  json: () => {
    switch (url) {
      case MEALDB_REQUEST_URL:
        return Promise.resolve(mealdbResponse);   
      case COCKTAILDB_REQUEST_URL:
        return Promise.resolve(cocktaildbResponse);
      case MEALDB_CATEGORIES_REQUEST_URL:
        return Promise.resolve(mealdbCategories);
      case COCKTAILDB_CATEGORIES_REQUEST_URL:
        return Promise.resolve(cocktaildbCategories)
      case BEEFMEALS_REQUEST_URL:
        return Promise.resolve(beefMeals)
      default:
        break;
    }} 
})

export default mockFetch