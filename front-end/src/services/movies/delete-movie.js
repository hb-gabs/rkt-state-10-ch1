import { api } from "../api"

export const deleteMovie = async ({ id }) => {
  try {
    const response = api.delete(`/movies/${id}`);

    return response;
  } catch (error) { 
    alert('Erro ao deletar o filme!');

    return;
  }
}