import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { RootLayout } from "./pages/RootLayout";
import { Add } from "./pages/Add";
import { Edit } from "./pages/Edit";
import { Details } from "./pages/Details";
import { PostList } from "./components/PostList";
import { ErrorPage } from "./pages/ErrorPage";
import { Provider } from "react-redux";
import store from "./state";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <PostList /> },
      {
        path: "post/add",
        element: <Add />,
      },
      {
        path: "post/:id/edit",
        element: <Edit />,
      },
      {
        path: "post/:id",
        element: <Details />,
        loader: ({ params }) => {
          if (isNaN(params.id)) {
            throw new Response("Bad Request", { status: 400 });
          }
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
