import mealdbResponse from "./mealdbResponse"
import cocktaildbResponse from './cocktaildbResponse'
import { cocktaildbCategories, mealdbCategories } from "./categoriesResponse";
import beefMeals from "../../../cypress/mocks/beefMeals";
import { mealById } from "./mealById";
import { drinkById } from "./drinkById";

export const MEALDB_REQUEST_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
export const COCKTAILDB_REQUEST_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
export const MEALDB_CATEGORIES_REQUEST_URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
export const COCKTAILDB_CATEGORIES_REQUEST_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
export const BEEFMEALS_REQUEST_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef'
export const MEALBYID_REQUEST_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52977'
export const DRINKBYID_REQUEST_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15997'

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
      case MEALBYID_REQUEST_URL:
        return Promise.resolve(mealById)
      case DRINKBYID_REQUEST_URL:
        return Promise.resolve(drinkById)
      default:
        break;
    }} 
})

export default mockFetch