import React from 'react';
import { CourseParts } from '../types';

const assertNever = (value: never): never => {
	throw new Error(
		`Unhandled discriminated union member: ${JSON.stringify(value)}`
	)
}

const Part: React.FC<CourseParts> = ({ parts }) => {
	return (
		<div>
			{parts.map(part => {
			switch (part.name) {
				case "Fundamentals":
					return (
						<p key={part.name}>
							{part.name} {part.description} {part.exerciseCount}
						</p>
					)
				case "Using props to pass data":
					return (
						<p key={part.name}>
							{part.name} {part.groupProjectCount} {part.exerciseCount}
						</p>
					)
				case "Deeper type usage":
					return (
						<p key={part.name}>
							{part.name} {part.description} {part.exerciseCount} <a href={part.exerciseSubmissionLink}>{part.exerciseSubmissionLink}</a>
						</p>
					)
				case "Custom course part":
					return (
						<p key={part.name}>
							{part.name} {part.description} {part.exerciseCount}
						</p>
					)
				default:
					return assertNever(part);
				}
			})}
		</div>
	);	
}

export default Part