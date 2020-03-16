interface IResult {
	periodLength: number,
	trainingDays: number,
	succes: boolean,
	rating: number,
	ratingDescription: string,
	target: number,
	average: number
}

const calculateExercises = (hours:number[], target: number): IResult => {
	let rating: number = 1;
	let ratingDescription: string = '';

	const periodLength = hours.length;
	const trainingDays = hours.filter(value => value > 0).length;
	const average = hours.reduce((a,b) => a+b, 0) / hours.length;
	const succes = average > target;

	switch (true) {
		case (target - average >= 0.5):
			rating = 1
			ratingDescription = 'Get a grip!'
			break;
		case (target - average < 0.5 || target - average >= -0.5 ):
			rating = 2
			ratingDescription = 'Nice. But you can do even better!'
			break;
		case (target-average < -0.5):
			rating = 3
			ratingDescription = 'Superb work!'
			break;
		default:
			break;
	}
	return {
		periodLength: periodLength,
		trainingDays: trainingDays,
		succes: succes,
		rating: rating,
		ratingDescription: ratingDescription,
		target: target,
		average: average
	};
}
const allArguments = process.argv.slice(2);
const target = Number(allArguments[0])
const hours = allArguments.slice(1).map(hour => Number(hour))

console.log(calculateExercises(hours, target));