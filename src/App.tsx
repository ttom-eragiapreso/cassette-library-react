import axios from "axios";
import { useEffect } from "react";
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
  const discogsToken: string = "HWiFdStcHwaqgBqEAoEjjvCFhQUNnZHqZFuelXuZ";
  const releaseTitle: string = "stadium arcadium";
  const baseCall: string = `https://api.discogs.com/database/search?token=${discogsToken}&release_title=${releaseTitle}`;
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
  useEffect(() => {
    axios
      .get(baseCall, {
        headers: {
          "User-Agent": "foo/3.0"
        }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <RouterProvider router={router} />;
};

export default App;
