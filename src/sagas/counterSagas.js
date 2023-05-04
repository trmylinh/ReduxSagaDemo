import { DECREMENT, INCREMENT } from "../actions/actionTypes";
import { delay, takeEvery, takeLatest } from 'redux-saga/effects'
// takeEvery() : thực thi và trả lại kết quả của mọi actions được gọi.
// takeEvery là non-blocking : khi thực hiện 1 hành động nào đó, nó sẽ gọi hàm trc khi dispatch vào reducers
function* increment(){
    yield delay(2000);
    console.log('increment saga');
}

export function* watchIncrement(){
    //takeEvery: gọi hàm increment() -> log , rồi mới dispatch 'INCREMENT' vào reducers, lần lượt theo số lần bấm button
    //takeLatest: khác takeEvery ở chỗ, nó sẽ không quan tâm thằng trước đó đã chạy xong chưa, nó sẽ cancel thằng đó, rồi log ra lần cuối cùng
    yield takeLatest(INCREMENT, increment);
}

function* decrement(){
    yield delay(2000);
    console.log('decrement saga');
}

export function* watchDecrement(){
    // gọi hàm increment() -> log , rồi mới dispatch 'INCREMENT' vào reducers
    yield takeEvery(DECREMENT, decrement);
}