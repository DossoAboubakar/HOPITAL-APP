import { Injectable } from '@angular/core';
import { Patient } from '../interface/patient.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  API_URL = 'http://127.0.0.1:8000/dossier-patient';

  constructor(private http: HttpClient) {}

  getPatientsList() /* : Observable<any> */ {
    return this.http.get(this.API_URL);
  }
}
