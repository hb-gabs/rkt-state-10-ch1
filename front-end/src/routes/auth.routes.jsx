import { Route, Routes } from "react-router-dom"
import { Signin, Signup } from "../pages"

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Signin />}
      />
      <Route
        path="/signup"
        element={<Signup />}
      />
    </Routes>
  )
}