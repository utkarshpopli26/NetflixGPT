import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/body';
import Browse from './components/browse';
import { RouterProvider } from 'react-router-dom';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body/>
    },
    {
      path: '/browse',
      element: <Browse/>
    }
  ]);

  return (
    <RouterProvider router={appRouter}>
      <Body/>
    </RouterProvider>
  );
}

export default App; 
