import React from 'react';
import HeaderCartButton from './HeaderCartButton';

import css from './Header.module.css';

const Header = (props) => {
	return (
		<>
			<header className={css.header}>
				<h1>React Meals</h1>
				<HeaderCartButton />
			</header>
			<div className={css['main-image']}>
				<img
					src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"
					alt="Banner"
				/>
			</div>
		</>
	);
};

export default Header;
