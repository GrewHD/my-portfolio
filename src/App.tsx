import React, { ReactNode } from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import PageNotFound from './pages/PageNotFound';

const router = createBrowserRouter([{
  path: '/',
  element: HomePage(),
}, {
  path: '/about-me',
  element: AboutMePage(),
}, {
  path: '/projects',
  element: AboutMePage(),
}, {
  path: '*',
  element: PageNotFound(),
}])

function App() {
  // const asciiArt = `
  // +====================================================================================+
  // |                                                                                    |
  // |      __  __       _          _         __     ___ _        _    _     _            |
  // |     |  \\/  |_   _| | ___   _| |_ __ _  \\ \\   / (_| |_ ___ | | _| |__ (_)_ __       |
  // |     | |\\/| | | | | |/ | | | | __/ _\` |  \\ \\ / /| | __/ _ \\| |/ | '_ \\| | '_ \\      |
  // |     | |  | | |_| |   <| |_| | || (_| |   \\ V / | | || (_) |   <| | | | | | | |     |
  // |     |_|  |_|\\__, |_|\\_\\\\__, |\\__\\__,_|    \\_/  |_|\\__\\___/|_|\\_|_| |_|_|_| |_|     |
  // |             |___/      |___/                                                       |
  // |                                                                                    |
  // +====================================================================================+
  // `;

  return (
    <div className="App">
      <div className='overlay' />
      <div className='scan' />
      <div className='wrapper'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
