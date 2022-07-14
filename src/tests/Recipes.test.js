import React from "react";
import { screen, waitFor } from "@testing-library/react";
import App from "../App";
import renderWithRouter from "./helpers/renderWithRouter";
import mockFetch, {
  COCKTAILDB_REQUEST_URL,
  MEALDB_REQUEST_URL,
} from "./mocks/fetch";

describe("Testa a tela de receitas", () => {
  beforeEach(() => {
    global.fetch = jest.fn(mockFetch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it("Deve mostrar as informações básicas de cada receita retornada", async () => {
    const { history } = renderWithRouter(<App />);
    history.push("/foods");
    await waitFor(() => {
      expect(screen.getAllByTestId(/-recipe-card$/i)).toHaveLength(12);

      expect(screen.getAllByTestId(/-card-img$/i)).toHaveLength(12);

      expect(screen.getAllByTestId(/-card-name$/i)).toHaveLength(12);
    });
  });

  it("Deve fazer a requisição para o endpoint certo", async () => {
    const { history } = renderWithRouter(<App />);
    history.push("/foods");

    await waitFor(() => expect(fetch).toHaveBeenCalledWith(MEALDB_REQUEST_URL));
    history.push("/drinks");

    await waitFor(() =>
      expect(fetch).toHaveBeenCalledWith(COCKTAILDB_REQUEST_URL)
    );
  });
});
