import express from 'express';
import patientService from '../services/patientService';
import toNewPatient from '../utils';

const patientRouter = express.Router();

patientRouter.get('/', (_req, res) => {
	res.send(patientService.getPatientsNoSsn());
});

patientRouter.post('/', (req, res) => {
	try {
		const newPatient = toNewPatient(req.body);
		const addedPatient = patientService.addPatient(newPatient);
		res.json(addedPatient);
	} catch (error) {
		res.status(400).send(error.message);
	}
});

export default patientRouter;