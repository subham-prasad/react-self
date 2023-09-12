import React, { lazy, Suspense, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";

import RestaurantMenu from "./Components/RestaurantMenu";
import Shimmer from "./Components/Shimmer";
import UserContext from "./Components/utils/userContext";
import Profile from "./Components/Profile";

import store from "./Components/utils/Store";
import Cart from "./Components/Cart";
// import Instamart from "./Components/Instamart";

// React.createElement => Object => HTML(DOM)

// JSX => React.createElement => Object => HTML(DOM)  babel converts JSX to React.createElement

const Instamart = lazy(() => import("./Components/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Subham Prasad",
    email: "shubhamprasadwork@gmail.com",
  });

  return (
    <>
      <Provider store={store}>
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
