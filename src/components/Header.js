import classes from './Header.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';

const Header = () => {
	const dispatch = useDispatch();
	const auth = useSelector((state) => {
		return state.auth.isAuthenticated;
	});

	const handleLogout = () => {
		dispatch(authActions.logout());
	};
	return (
		<header className={classes.header}>
			<h1>Redux Auth</h1>
			{auth ? (
				<nav>
					<ul>
						<li>
							<a href="/">My Products</a>
						</li>
						<li>
							<a href="/">My Sales</a>
						</li>
						<li>
							<button onClick={handleLogout}>Logout</button>
						</li>
					</ul>
				</nav>
			) : null}
		</header>
	);
};

export default Header;
