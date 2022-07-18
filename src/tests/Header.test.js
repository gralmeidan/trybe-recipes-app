import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import renderWithRouter from './helpers/renderWithRouter';

import App from '../App';
import Header from '../components/Header/Header';

describe('Verifica o Título', () => {
  test('Página /foods', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');

    const titleFoods = screen.getByTestId('page-title');
    expect(titleFoods).toBeInTheDocument()
    expect(titleFoods).toHaveTextContent(/foods/i)
  });

  test('Página /drinks', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/drinks');

    const titleDrinks = screen.getByTestId('page-title');
    expect(titleDrinks).toBeInTheDocument()
    expect(titleDrinks).toHaveTextContent(/drinks/i)
  });

  test('Página /profile', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/profile');

    const titleProfile = screen.getByTestId('page-title');
    expect(titleProfile).toBeInTheDocument()
    expect(titleProfile).toHaveTextContent(/profile/i)
  });

  test('Página /done-recipes', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/done-recipes');

    const titleProfile = screen.getByTestId('page-title');
    expect(titleProfile).toBeInTheDocument()
    expect(titleProfile).toHaveTextContent(/done recipes/i)
  });

  test('Página /favorite-recipes', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/favorite-recipes');

    const titleProfile = screen.getByTestId('page-title');
    expect(titleProfile).toBeInTheDocument()
    expect(titleProfile).toHaveTextContent(/favorite recipes/i)
  });
});

describe('Botão de Perfil', () => {
  // Como o botão de Perfil precisa estar presente sempre que o Header estiver presente
  // Vamos fazer apenas uma verificação direto no Componente.

  test('Verifica se o Botão de Perfil está presente no <Header>', () => {
    const testTile = 'Título de Teste';
    renderWithRouter(<Header title={ testTile } />);
    
    const profileBtn = screen.getByTestId('profile-top-btn');
    expect(profileBtn).toBeInTheDocument();
  });

  test('Verifica se ao Clicar no Botão Perfil, redireciona para /perfil', () => {
    const testTile = 'Título de Teste';
    const { history } = renderWithRouter(<Header title={ testTile } />);

    const profileBtn = screen.getByTestId('profile-top-btn');
    userEvent.click(profileBtn);

    expect(history.location.pathname).toBe('/profile');
  });
}); 

describe('Botão de Busca', () => {
  test('Se está presente na Página /foods', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');

    const searchBtn = screen.getByTestId('search-top-btn');
    expect(searchBtn).toBeInTheDocument();
  });

  test('Se está presente na Página /drinks', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/drinks');

    const searchBtn = screen.getByTestId('search-top-btn');
    expect(searchBtn).toBeInTheDocument();
  });

  test('Se não está presente na Página /profile', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/profile');

    const searchBtn = screen.queryByTestId('search-top-btn');
    expect(searchBtn).not.toBeInTheDocument();
  });

  test('Se não está presente na Página /done-recipes', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/done-recipes');

    const searchBtn = screen.queryByTestId('search-top-btn');
    expect(searchBtn).not.toBeInTheDocument();
  });

  test('Se não está presente na Página /favorite-recipes', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/favorite-recipes');

    const searchBtn = screen.queryByTestId('search-top-btn');
    expect(searchBtn).not.toBeInTheDocument();
  });

  test('Verifica se ao clicar no botão de busca o campo aparece/desaparece', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');

    const searchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(searchBtn);

    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();

    userEvent.click(searchBtn);
    expect(searchInput).not.toBeInTheDocument();
  });

  test('Digita um texto no campo de busca', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/drinks');

    const searchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(searchBtn);

    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();

    const searchValue = 'pizza';

    userEvent.type(searchInput, searchValue);
    expect(searchInput).toHaveValue(searchValue);
  });
}); 