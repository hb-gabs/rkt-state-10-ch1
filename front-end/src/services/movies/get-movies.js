import { api } from "../api"

export const getMovies = async () => {
  try {
    const response = await api.get('/movies');

    return response;

  } catch (error) {
    alert('Erro ao buscar os filmes');
    return;
  }
}