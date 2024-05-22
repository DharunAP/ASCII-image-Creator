import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';

const Router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signUp',
    element:<SignUp/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={Router}/>
);
