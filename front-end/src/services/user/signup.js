import { api } from "../api";

export const signup = async ({ data }) => {
  try {
    const result = await api.post('/users', {
      ...data,
    });

    if(result.status === 201) {
      alert('Usuário criado com sucesso!');
    }

    return result;
  } catch (error) {
    if (error.response.data.message) {
      alert(error.response.data.message);
      return;
    }
    alert('Não foi possível criar um usuário!');
    return error.response;
  }
};