import { Injectable } from '@angular/core';
import { Patients } from '../patients'
@Injectable()
export class PatientService {
  // create getPatients methosd that returns an array of patients
  getPatients() {
    return Patients
  }

  constructor() { }

}
