import React from 'react';
import { Provider } from 'react-redux';
import Home from './src/screens/Home';


// import store
import {store} from './src/redux/store';
import CounterScreen from './src/screens/CounterScreen';

export default function App() {
  return (
    <Provider store={store}>
    {/* <Home /> */}
    <CounterScreen/>
    </Provider>
  );
}