import { Route, Routes } from "react-router-dom"
import { Home, MovieView, NewMovie, Profile } from "../pages"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/movie/new"
        element={<NewMovie />}
      />
      <Route
        path="/profile"
        element={<Profile />}
      />
      <Route
        path="/movie/view/:id"
        element={<MovieView />}
      />
    </Routes>
  )
}