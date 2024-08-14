import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import PageNotFound from './pages/PageNotFound';
import ProjectsPage from './pages/ProjectsPage';

const router = createBrowserRouter([{
  path: '/',
  element: HomePage(),
}, {
  path: '/about-me',
  element: AboutMePage(),
}, {
  path: '/projects',
  element: ProjectsPage(),
}, {
  path: '*',
  element: PageNotFound(),
}])

function App() {
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
