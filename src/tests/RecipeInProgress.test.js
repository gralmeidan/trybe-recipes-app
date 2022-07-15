import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import App from "../App";
import renderWithRouter from "./helpers/renderWithRouter";
import mockFetch, {
  DRINKBYID_REQUEST_URL,
  MEALBYID_REQUEST_URL,
} from "./mocks/fetch";
import { cocktaildbCategories, mealdbCategories } from "./mocks/categoriesResponse";
import beefMeals from "../../cypress/mocks/beefMeals";
import { act } from "react-dom/test-utils";
import mealdbResponse from "./mocks/mealdbResponse";
import cocktaildbResponse from "./mocks/cocktaildbResponse";

describe("Testa a tela de receitas", () => {
  beforeEach(() => {
    global.fetch = jest.fn(mockFetch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it("Deve fazer a requisição para o endpoint certo", async () => {
    const { history } = renderWithRouter(<App />);
    history.push("/foods/52977/in-progress");
    
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(MEALBYID_REQUEST_URL)
    })

    history.push("/drinks/15997/in-progress");
    
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(DRINKBYID_REQUEST_URL)
    })
  });

  it("Deve haver um botão de compartilhar receita", async () => {
    const { history } = renderWithRouter(<App />);
    history.push("/foods/52977/in-progress");
    
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(MEALBYID_REQUEST_URL)
    })

    history.push("/drinks/15997/in-progress");
    
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(DRINKBYID_REQUEST_URL)
    })
  });


});
