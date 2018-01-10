import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const storeConfig = createStore(rootReducer);

export default storeConfig;
