import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter'
import mockFetch, { COCKTAILDB_REQUEST_URL, MEALDB_REQUEST_URL } from './mocks/fetch';

describe('Testa a tela de receitas', () => {

  beforeEach(() => {
    global.fetch = jest.fn(mockFetch)
  })

  it('Deve fazer a requisição para o endpoint certo', async () => {
    const { history } = renderWithRouter(<App/>)
    history.push('/foods')

    await waitFor(() => expect(fetch).toHaveBeenCalledWith(MEALDB_REQUEST_URL))
    history.push('/drinks')

    await waitFor(() => expect(fetch).toHaveBeenCalledWith(COCKTAILDB_REQUEST_URL))

  })
})
