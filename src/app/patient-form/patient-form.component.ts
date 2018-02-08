import { Component, OnInit } from '@angular/core';
// import Patient Class
import { Patient } from '../patient'

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  // create a new patient property
  newPatient = new Patient(0, '', '', '', '', '');
  constructor() { }

  ngOnInit() {
  }

}
