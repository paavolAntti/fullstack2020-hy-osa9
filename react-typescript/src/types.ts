export interface HeaderProps {
	name: string;
}
interface CoursePartBase {
	name: string;
	exerciseCount: number;
}
interface CoursePartDescription extends CoursePartBase {
	description: string;
}
interface CoursePartOne extends CoursePartDescription {
	name: "Fundamentals";
}

interface CoursePartTwo extends CoursePartBase {
	name: "Using props to pass data";
	groupProjectCount: number;
}

interface CoursePartThree extends CoursePartDescription {
	name: "Deeper type usage";
	exerciseSubmissionLink: string;
}
interface CustomCoursePart extends CoursePartDescription {
	name: "Custom course part";
}

export type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree | CustomCoursePart;

export interface CourseParts {
	parts: CoursePart [];
}

 