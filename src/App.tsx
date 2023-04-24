import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { appTheme } from './app.theme';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';


  
  export default function App() {

  return (
    <div className="App">
      <ThemeProvider theme = {appTheme}>
      <BrowserRouter>
        <Routes >
          <Route path="/orders" element={<Orders></Orders>} />
          <Route path="/" element={<Login></Login>} />
          <Route path="/dashboard" element={<Dashboard></Dashboard>} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

