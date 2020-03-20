import patientData from '../../data/patients.json';
import randomstring from 'randomstring';
import { Patient, NoSsnPatient, NewPatient } from '../types';
import toNewPatient from '../utils';

const lastPart = '-f723-11e9-8f0b-362b9e155667';


const noSsnPatients: NoSsnPatient [] = patientData.map(obj => {
	const object = toNewPatient(obj) as NoSsnPatient;
	object.id = obj.id;
	return object;
});


const patients: Patient [] = patientData.map(obj => {
	const object = toNewPatient(obj) as Patient;
	object.id = obj.id;
	return object;
});

const getPatientsNoSsn = (): NoSsnPatient [] => {
	return noSsnPatients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
		id,
		name,
		dateOfBirth,
		gender,
		occupation
	}));
};
const addPatient = ( patient: NewPatient ): Patient => {
	const firstPart = `d2773${randomstring.generate({
		length: 3,
		capitalization: 'lowercase'})}`;

	const newPatient = {
		id: `${firstPart}${lastPart}`,
		...patient
	};
	patients.push(newPatient);
	return newPatient;
};



export default { getPatientsNoSsn, addPatient };