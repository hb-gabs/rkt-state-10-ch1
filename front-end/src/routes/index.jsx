import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./app.routes"
import { AuthRoutes } from "./auth.routes"
import { useAuth } from "../hooks"

export const Routes = () => {

  const { userData } = useAuth();
  
  return (
    <BrowserRouter>
      {userData.token ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}