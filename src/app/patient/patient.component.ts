import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Patient } from '../patient-model';
import { Patients } from '../patients';
import { PatientService } from '../patients/patient.service';
import { FilterPipe } from '../pipes';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  providers: [PatientService],
  styleUrls: ['./patient.component.css'],
  pipes: [FilterPipe]
})
export class PatientComponent implements OnInit {
  // newPatient = new Patient(0, '', '', '', '', '');
  // update property patients - give it a type Patient
  patients: Patient[];
  // inject the service to the constructor
  // Call the getPatients() method - returns an array of patients
  // assign it to the patients property
  constructor(patientService: PatientService) {
    this.patients = patientService.getPatients()
  }

  ngOnInit() {

  }

  newPatient = false;

  // create the addNewPatient function - takes patient object as an arg
  // find length of the array of patients
  // set the new patient id to patientLength +1
  // Add the new patient to the array of patients
  addNewPatient(patient) {
    let patientLength = this.patients.length;
    patient.id = patientLength += 1;
    this.patients.push(patient);
    this.newPatient = false;
  }
  deletePatient(index) {
    this.patients.splice(index, 1)
  }
  selectedPatient: Patient;

  onSelect(patient: Patient): void {
    this.selectedPatient = patient;
  }

  // openForEdit(patient: Patient): void {
  //   this.selectedPatient = patient;
  // }
}
