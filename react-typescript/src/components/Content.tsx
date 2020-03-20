import React from 'react';
import { CourseParts } from '../types';
import Part from './Part';


const Content: React.FC<CourseParts> = ({ parts }) => {
	return 	(
		<Part parts={parts}/>
	)
}

export default Content