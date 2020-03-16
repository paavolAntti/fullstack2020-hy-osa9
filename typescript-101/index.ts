import express from 'express';
import calculateBmi from './bmiCalculator';
import calculateExercises from './exerciseCalculator';

interface ExerciseBody {
	daily_exercises: number[];
	target: number;
}

const app = express();
app.use(express.json());
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const exerciseTypeGuard = (obj: any): obj is ExerciseBody => {
	return (obj as ExerciseBody).daily_exercises !== undefined
		&& (obj as ExerciseBody).target !== undefined;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parameterFormatChecker = (hours: any[], target: any) => {
	let hoursAreNums = true;
	hours.forEach(hour => {
		if (typeof hour !== 'number') {
			hoursAreNums = false;
		}
	});
	return hoursAreNums && typeof target === 'number';
};



app.get('/hello', (_req, res) => {
	res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
	const weight = Number(req.query.weight);
	const height = Number(req.query.height);
	
	const bmi: string = calculateBmi(height, weight);
	if (!weight || !height) {
		return res.json({
			error: 'malformatted parameters'
		});
	}
	return res.json({
		weight: weight,
		height: height,
		bmi: bmi
	});
});

app.post('/exercises', (req, res) => {
	const body: ExerciseBody = req.body;
	
	if (!(exerciseTypeGuard(body))) {
		return res.json({
			error: 'parameters missing'
		});
	} else if (!(parameterFormatChecker(body.daily_exercises, body.target))) {
		return res.json({
			error: 'malformatted parameters'
		});
	}
	return res.json(calculateExercises(body.daily_exercises, body.target));
});

const PORT = 3002;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});