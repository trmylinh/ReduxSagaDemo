import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CounterComponent from './src/components/CounterComponent';
import { Provider } from 'react-redux';
// import { store } from './src/store';
import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, createStore } from 'redux';
import { rootReducers } from './src/reducers';
import rootSaga from './src/sagas/rootSaga';
// import logger from 'redux-logger'

//middlware
const sagaMiddleware = createSagaMiddleware();

//từ applyMiddleware vào reducers thì tạo 1 store, sagaMiddleware nằm giữa action và reducer
let store = createStore(
  rootReducers,
  // applyMiddleware(logger), 
  applyMiddleware(sagaMiddleware)
);

export default function App() {

  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
}

sagaMiddleware.run(rootSaga);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
