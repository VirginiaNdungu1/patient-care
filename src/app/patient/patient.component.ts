import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients = [
    new Patient(1, 'Nish', 'Bernards', '1994/8/8', '+254 701 100 175', 'ndungu.wairimu22@gmail.com'),
    new Patient(1, 'Joy', 'Lorna', '1998/8/8', '+254 701 100 560', 'joy.lorna@gmail.com'),
    new Patient(1, 'Sam', 'Maundu', '1994/9/10', '+254 703 973 073', 'sam.maundu@gmail.com'),
    new Patient(1, 'Purity', 'Wanjiku', '1984/5/31', '+254 712 234 567', 'wanjiku.purity@gmail.com'),
    new Patient(1, 'Kevin', 'Mbuthia', '1990/11/15', '+254 715 101 318', 'kevin.mbuthia@gmail.com'),
    new Patient(1, 'Newton', 'Kiragu', '1997/7/10', '+254 712 824 175', 'kiragu.newton@gmail.com'),
  ]
  constructor() { }

  ngOnInit() {
  }

}
