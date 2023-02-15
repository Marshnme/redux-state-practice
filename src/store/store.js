import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import authReducer from './authSlice';

// const counterReducer = (state = initialState, action) => {
// 	if (action.type === 'INCREMENT') {
// 		return {
// 			counter: state.counter + 1,
// 			showCounter: state.showCounter,
// 		};
// 	}

// 	if (action.type === 'INCREASE') {
// 		return {
// 			counter: state.counter + action.payload,
// 			showCounter: state.showCounter,
// 		};
// 	}

// 	if (action.type === 'DECREMENT') {
// 		return {
// 			counter: state.counter - 1,
// 			showCounter: state.showCounter,
// 		};
// 	}

// 	if (action.type === 'TOGGLE_COUNTER') {
// 		return {
// 			counter: state.counter,
// 			showCounter: !state.showCounter,
// 		};
// 	}
// 	return state;
// };

const store = configureStore({
	reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
