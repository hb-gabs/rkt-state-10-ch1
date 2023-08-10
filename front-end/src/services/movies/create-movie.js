import { api } from "../api"

export const createMovie = async ({
  movieData,
}) => {
  try {
    const response = await api.post('/movies', movieData);

    if (response.status === 201) {
      alert('Filme criado com sucesso!');
    }

    return response;
  } catch (error) {
    alert('Erro ao criar novo filme!');
    
    return;
  }
}