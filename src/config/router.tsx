import { createBrowserRouter } from "react-router";
import { FeedPage } from "@/features/feed";
import AppLayout from "@/layout/AppLayout";
import { SearchPage } from "@/features/Search";
import { ProfilePage } from "@/features/profile";
import { CreatePost } from "@/features/post";

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
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/create",
        element: <CreatePost />,
      },
      {
        path: "/*",
        element: <h2 className="text-red-700">Page Note Found</h2>,
      },
    ],
  },
]);
