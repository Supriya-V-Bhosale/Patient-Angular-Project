import { Injectable } from '@angular/core';
import {Patient} from './patient';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patients:Patient[];
  constructor(private httpClient: HttpClient) { }


  getAllPatients(){
    this.httpClient.get(environment.apiUrl + '/api/patients').toPromise().then(
      response=>{console.log(response);
      this.patients=response as Patient[];
      }
      );
  }

}
