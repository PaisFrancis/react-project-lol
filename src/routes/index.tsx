import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/about";
import ChampionsPage from "../pages/Champions";
import Intro from "../pages/Intro";
import OtherGames from "../pages/Other(games)/OtherGames";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Intro />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/champions",
        element: <ChampionsPage />,
      },
      {
        path: "/othergames",
        element: <OtherGames />,
      },
    ],
  },
]);
