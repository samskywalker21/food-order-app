import React from 'react';
import MealItemForm from './MealIteamForm';

import css from './MealItem.module.css';

const MealItem = (props) => {
	const price = `P ${props.price}`;

	return (
		<li className={css.meal}>
			<div>
				<div>
					<h3>{props.name}</h3>
				</div>
				<div className={css.description}>{props.description}</div>
				<div className={css.price}>{price}</div>
			</div>
			<div>
				<MealItemForm id={props.id} />
			</div>
		</li>
	);
};

export default MealItem;
