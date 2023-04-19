import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { appTheme } from './app.theme';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme = {appTheme}>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Login></Login>} />
          <Route path="/dashboard" element={<Dashboard></Dashboard>} />
            <Route path="/orders" element={<Orders></Orders>} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
