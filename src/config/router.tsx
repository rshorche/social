import { createBrowserRouter, Navigate } from "react-router";
import AppLayout from "@/layout/AppLayout";
import { FeedPage } from "@/features/feed";
import { ProfilePage } from "@/features/profile";
import { SearchPage } from "@/features/Search";
import { CreatePost } from "@/features/post";
import { AuthPage } from "@/features/auth";

const IS_LOGGED_IN = true;

export const router = createBrowserRouter([
  {
    path: "/",
    element: IS_LOGGED_IN ? <AppLayout /> : <Navigate to="/login" replace />,
    children: [
      { index: true, element: <FeedPage /> },
      { path: "search", element: <SearchPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "create", element: <CreatePost /> },
    ],
  },
  {
    path: "/login",
    element: !IS_LOGGED_IN ? <AuthPage /> : <Navigate to="/" replace />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
