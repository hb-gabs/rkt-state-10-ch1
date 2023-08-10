import { api } from "../api"

export const getOneMovie = async ({ id }) => {
  try {
    const response = api.get(`/movies/${id}`, { id });

    return response;

  } catch (error) {
    alert(`Errro ao buscar o filme! ${error.response.data.message}`);

    return;
  }
}