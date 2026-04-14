import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Timeline from './pages/Timeline';
import Stats from './pages/Stats';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    children: [
      { index: true, element: <Home /> },
      { path: "timeline", element: <Timeline /> },
      { path: "stats", element: <Stats /> },
      { path: "friend/:id", element: <FriendDetails /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)