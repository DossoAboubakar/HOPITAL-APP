import { Component , } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Patient } from '../../../../../interface/patient.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directory-template',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './directory-template.component.html',
  styleUrl: './directory-template.component.css'
})
export class DirectoryTemplateComponent {
  listPatient:Array<Patient> = []

   patient:Patient = {
    nom: "",
    prenom: "",
    localisation: "",
    genre: "",
    dateDeNaissance: "",
    lieuDeNaissance: "",
    profession: "",
    contact: "",
    email: "",
    groupeSanguin: "",
    antecedents: ""
  };
  
  pushFormData (){
this.listPatient.push(this.patient)
console.log(this.listPatient)

  }

}
