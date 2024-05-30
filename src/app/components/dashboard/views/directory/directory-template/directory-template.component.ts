import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Patient } from '../../../../../interface/patient.model';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-directory-template',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './directory-template.component.html',
  styleUrl: './directory-template.component.css',
})
export class DirectoryTemplateComponent {
  listPatient: Array<Patient> = [];

  patient: Patient = {
    nom: '',
    prenom: '',
    localisation: '',
    genre: '',
    date_naissance: null,
    lieu_naissance: '',
    profession: '',
    contact: '',
    email: '',
    groupe_sanguin: '',
    antecedents: '',
  };

  API_URL = 'http://192.168.1.108:8000/api/dossier-patient';

  constructor(private http: HttpClient) {}

  pushFormData() {
    console.log(this.patient);
    this.http.post(this.API_URL, this.patient).subscribe({
      next: (res) => console.log('res:', res),
      error: (err) => console.log('erreur:', err),
    });
    //this.listPatient.push(this.patient)
  }
}
