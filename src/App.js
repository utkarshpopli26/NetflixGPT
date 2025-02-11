import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/body';
import Browse from './components/browse';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';



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
    <Provider store={appStore}>
    <RouterProvider router={appRouter}>
      <Body/>
    </RouterProvider>
    </Provider>
  );
}

export default App; 
