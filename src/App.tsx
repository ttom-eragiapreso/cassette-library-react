import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<MainLayout />}>
        <Route
          index
          element={<LandingPage />}
        />
        <Route
          path="/search"
          element={<SearchPage />}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
