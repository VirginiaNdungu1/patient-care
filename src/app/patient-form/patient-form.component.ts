// import Output, EventEmitter functions
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// import Patient Class
import { Patient } from '../patient-model'

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  // create a new patient property
  newPatient = new Patient(0, '', '', '', '', '');

  // create new EventEmitter object (addPatient) of type Patient
  @Output() addPatient = new EventEmitter<Patient>();

  // Call the emit method and pass in the newPatient property
  submitPatient() {
    this.addPatient.emit(this.newPatient)
  }
  constructor() { }

  ngOnInit() {
  }

}
