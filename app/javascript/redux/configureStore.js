import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './reducers/messages';

const store = configureStore({ reducer: { messages: messagesReducer } });
export default store;
