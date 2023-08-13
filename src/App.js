import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './reduxContainer/Store';
import Bookcontainer from './reduxContainer/Bookcontainer';
import Header from './Header';



function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <h3>welcome to redux</h3>
     <Bookcontainer></Bookcontainer>
     <Header></Header>
    </div>
    </Provider>
   
  );
}

export default App;
