import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
// import Root from './routes/Root';
import ErrorPage from './ErrorPage.jsx';
import Registration from './components/Registration.jsx';
import Confirmation from './components/Confirmation.jsx';
import { loader as orderLoader } from './hooks/orders.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Registration /> },
      {
        path: 'confirm/:orderNumber',
        element: <Confirmation />,
        loader: orderLoader,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
