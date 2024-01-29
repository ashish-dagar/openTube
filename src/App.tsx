import Head from './component/Head';
import Body from './component/Body';
import { Provider } from 'react-redux';
import store from './store/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './component/MainContainer';
import WatchPage from './component/WatchPage';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
      path: '/',
      element:  <MainContainer/>
      },
      {
        path: '/watch',
        element: <WatchPage />
      }
    ]
  }
]);

function App() {console.log("store", store)
  return (
    <Provider store={store}>
      <div className="App">  
      <Head />
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
