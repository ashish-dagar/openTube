import Head from './component/Head';
import Body from './component/Body';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {console.log("store", store)
  return (
    <Provider store={store}>
      <div className="App">  
      <Head />
      <Body />
    </div>
    </Provider>
  );
}

export default App;
