import { NewPatient, Gender } from './types';

/* eslint-disable @typescript-eslint/no-explicit-any */
const isString = (text: any): text is string => {
	return typeof text === 'string' || text instanceof String;
};
const isGender = (param: any): param is Gender => {
	return Object.values(Gender).includes(param);
};
const parseGender = (gender: any): Gender => {
	if(!gender || !isGender(gender)) {
		throw new Error('incorrect or missing gender: ' + gender);
	}
	return gender;
};
const parseName = (name: any): string => {
	if (!name || !isString(name)) {
		throw new Error('incorrect or missing name: ' + name);
	}
	return name;
};
const parseOccupation = (occupation: any): string => {
	if (!occupation || !isString(occupation)) {
		throw new Error('incorrect or missing occupation: ' + occupation);
	}
	return occupation;
};
const parseBirthDate = (date: any): string => {
	if (!date || !isString(date)) {
		throw new Error('incorrect or missing date: ' + date);
	}
	return date;
};

const parseSsn = (ssn: any): string => {
	if (!ssn || !isString(ssn)) {
		throw new Error('incorrect or missing ssn: ' + ssn);
	}
	return ssn;
};

const toNewPatient = (object: any): NewPatient => {
	const newPatient: NewPatient = {
		name: parseName(object.name),
		gender: parseGender(object.gender),
		dateOfBirth: parseBirthDate(object.dateOfBirth),
		occupation: parseOccupation(object.occupation),
		ssn: parseSsn(object.ssn)
	};
	return newPatient;
};

export default toNewPatient;