import React from 'react';
import { CourseParts } from '../types';


const Total: React.FC<CourseParts > = ({ parts }) => {
	return (
		<div>
			Number of exercises{" "}
			{parts.reduce((carry, part) => carry + part.exerciseCount, 0)}
		</div>
	)
}

export default Total;