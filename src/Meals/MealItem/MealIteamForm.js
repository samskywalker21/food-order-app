import React from 'react';
import Input from '../../UI/Input';

import css from './MealItemForm.module.css';

const MealItemForm = (props) => {
	return (
		<form className={css.form}>
			<Input
				id={props.id}
				label="Amount"
				type="number"
				max="5"
				min="1"
				step="1"
				defaultValue="1"
			/>
			<button>+ Add</button>
		</form>
	);
};

export default MealItemForm;
