import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  API_URL = 'http://192.168.1.104:8000/api/dossier-patient';

  constructor(private http: HttpClient) {}

  getPatientsList() /* : Observable<any> */ {
    return this.http.get(this.API_URL);
  }
}
