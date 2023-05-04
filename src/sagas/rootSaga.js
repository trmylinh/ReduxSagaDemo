import { watchDecrement, watchIncrement } from "./counterSagas";
import { all } from 'redux-saga/effects';

export default function* rootSaga(){
    yield all([
        watchIncrement(),
        watchDecrement(),
    ])
}