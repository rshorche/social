import { createBrowserRouter } from "react-router";
import { FeedPage } from "@/features/feed";
import AppLayout from "@/layout/AppLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <FeedPage />,
      },
      {
        path: "/*",
        element: <h2 className="text-red-700">Page Note Found</h2>,
      },
    ],
  },
]);
