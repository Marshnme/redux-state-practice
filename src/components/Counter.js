import { createAction } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/store';
import classes from './Counter.module.css';

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => {
		return state.counter;
	});

	const show = useSelector((state) => {
		return state.showCounter;
	});

	// const incrementHandler = () => {
	// 	dispatch({ type: 'INCREMENT' });
	// };

	// const increaseHandler = () => {
	// 	dispatch({ type: 'INCREASE', payload: 5 });
	// };

	// const decrementHandler = () => {
	// 	dispatch({ type: 'DECREMENT' });
	// };
	// const toggleCounterHandler = () => {
	// 	dispatch({ type: 'TOGGLE_COUNTER' });
	// };

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};

	const increaseHandler = () => {
		dispatch(counterActions.increase(5));
	};

	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};
	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={increaseHandler}>Increase by 5</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
