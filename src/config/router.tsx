import { createBrowserRouter } from "react-router";
import { Feed } from "@/features/feed";
import AppLayout from "@/layout/AppLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Feed />,
      },
      {
        path: "/*",
        element: <h2 className="text-red-700">Page Note Found</h2>,
      },
    ],
  },
]);
