import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import App from "../App";
import renderWithRouter from "./helpers/renderWithRouter";
import mockFetch, {
  MEALBYID_REQUEST_URL,
  DRINKBYID_REQUEST_URL,
  COCKTAILDB_REQUEST_URL,
  MEALDB_REQUEST_URL,
} from "./mocks/fetch";

describe("Testa a tela de Details", () => {
  beforeEach(() => {
    global.fetch = jest.fn(mockFetch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('testa se os fetchs são chamados corretamente', async () => {
    const { history } = renderWithRouter(<App />);
    history.push("/foods/52977");

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(MEALBYID_REQUEST_URL);
      expect(fetch).toHaveBeenCalledWith(COCKTAILDB_REQUEST_URL);
    });
      
  })

  it('testa se os fetchs são chamados corretamente', async () => {
    const { history } = renderWithRouter(<App />);
    history.push("/drinks/15997");

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(DRINKBYID_REQUEST_URL);
      expect(fetch).toHaveBeenCalledWith(MEALDB_REQUEST_URL);
    });
  });
})