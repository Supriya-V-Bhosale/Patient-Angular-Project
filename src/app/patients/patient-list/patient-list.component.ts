import { Component, OnInit } from '@angular/core';
import {PatientService} from 'src/app/shared/patient.service';
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  constructor(public patientService:PatientService) { }

  ngOnInit(): void {
    this.patientService.getAllPatients();
  }

}
