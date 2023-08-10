import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

const localeAuthKey = 'persist:auth';

const AuthProvider = ({ children }) => {
  
  let localeAuth = localStorage.getItem(localeAuthKey);

  localeAuth = JSON.parse(localeAuth || "{}");

  if (localeAuth.token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${localeAuth.token}`;
  }

  const [userData, setUserData] = useState(localeAuth || {});

  const logout = () => {
    setUserData({})
    localStorage.setItem(localeAuthKey, "");
  }

  const signin = async ({ data }) => {
    try {
      const response = await api.post('/sessions', data);
  
      if (response.status === 200) {
        api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        localStorage.setItem(localeAuthKey, JSON.stringify(response.data));
        setUserData(response.data);
      }
  
      return response;
    
    } catch (error) {
    
      if (error.response.data.message) {
        alert(error.response.data.message);
        return;
      }
    
      alert('Não foi possível logar!');
      return;
    }
  }

  const updateUser = async ({ data, avatarFile }) => {
    try {

      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append('avatar', avatarFile);

        const response = await api.patch('/users/avatar', fileUploadForm);
        data.avatar = response.data.avatar;
      }

      const response = await api.put('/users', data);
  
      if (response.status === 200) {
        alert('Informações alteradas com sucesso!');

        const newUserData = {
          ...userData,
          user: {
            ...userData,
            ...data,
          },
        };

        setUserData({ ...userData, user: response.data.user });
        localStorage.setItem(localeAuthKey, JSON.stringify({ ...userData, user: response.data.user }));
      }

      return response;
  
    } catch (error) {
      if (error.response.data.message) {
        alert(error.response.data.message);
        return;
      }
  
      alert('Erro ao atualizar informações do usuário');
      return;
    } 
  }

  return (
    <AuthContext.Provider value={{ userData, setUserData, signin, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };