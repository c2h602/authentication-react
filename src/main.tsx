import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MantineProvider } from "@mantine/core";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { ConfirmationCodeForm } from "./Components/ConfirmationCodeForm.tsx";
import { RegistrationForm } from "./Components/RegistrationForm";
import { AuthorizationForm } from "./Components/AuthorizationForm.tsx";
import { NotFoundPage } from './Components/NotFoundPage/NotFoundPage.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/registration/confirm",
        element: <ConfirmationCodeForm />,
    },
    {
        path: "/registration",
        element: <RegistrationForm />,
    },
    {
        path: "/auth",
        element: <AuthorizationForm />,
        index: true
    },
    {
        path: "*",
        element: <NotFoundPage/>,
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <MantineProvider>
    <RouterProvider router={router} />
      </MantineProvider>

  </React.StrictMode>,
)
