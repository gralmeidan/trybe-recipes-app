import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import App from "../App";
import renderWithRouter from "./helpers/renderWithRouter";
import mockFetch, {
  MEALBYID_REQUEST_URL,
} from "./mocks/fetch";

describe("Testa a tela de Details", () => {
  beforeEach(() => {
    global.fetch = jest.fn(mockFetch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('testa se os items são renderizados corretamente', () => {
    const { history } = renderWithRouter(<App />);
    history.push("/foods/52977");

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(MEALBYID_REQUEST_URL);
      
      for (let index = 0; index < 6; index += 1) {
        expect(screen.getAllByTestId(`${index}-recomendation-card`/i)).toBeInTheDocument();
      }
    });

  })
})