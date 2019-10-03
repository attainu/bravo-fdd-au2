import { createStore } from 'redux';
import Reducer from './reducers/Reducer';

function configureStore() {
    return createStore(
        Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}

export default configureStore;