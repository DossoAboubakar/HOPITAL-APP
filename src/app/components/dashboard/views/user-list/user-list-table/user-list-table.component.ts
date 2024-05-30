import { Component, OnInit, inject } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { Customer } from '../../../../../interface/cutomer.model';
import { Representative } from '../../../../../interface/representative.model';
import { CustomerService } from '../../../../../services/customer.service';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import {
  HttpClient,
  HttpClientModule,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Patient } from '../../../../../interface/patient.model';
import { PatientService } from '../../../../../services/patient.service';

@Component({
  selector: 'app-user-list-table',
  standalone: true,
  imports: [
    TableModule,
    FormsModule,
    ButtonModule,
    TagModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    MultiSelectModule,
    DropdownModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [CustomerService],
  templateUrl: './user-list-table.component.html',
  styleUrl: './user-list-table.component.css',
})
export class UserListTableComponent implements OnInit {
  deleteCustomer(arg0: any) {
    throw new Error('Méthode non implémentée.');
  }

  viewDetails(arg0: any) {
    throw new Error('Méthode non implémentée.');
  }

  contactCustomer(arg0: any) {
    throw new Error('Méthode non implémentée.');
  }

  customers!: Customer[];
  patients!: Patient[];
  value = '';
  dt2: any;
  representatives!: Representative[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];
  // private customerService = inject(CustomerService);
  // private patientService = inject(PatientService);

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.patientService.getPatientsList().subscribe({
      next: (patients: any) => {
        this.patients = patients;
        this.loading = false;

        this.patients.forEach(
          (patient) =>
            (patient.date_naissance = new Date(<Date>patient.date_naissance))
        );
      },

      error: (err: HttpResponse<HttpErrorResponse>) => {
        console.error('Oups! ', err);
      },

      complete: () => {},
    });

    this.representatives = [
      { name: 'Kone emmanuel', image: 'amyelsner.png' },
      { name: 'Dosso Aboubakar', image: 'annafali.png' },
      { name: 'Diarrassouba Ibrahim', image: 'asiyajavayant.png' },
      { name: 'Diarra Yaya', image: 'bernardodominic.png' },
      { name: 'Kone tokafolo', image: 'elwinsharvill.png' },
      { name: 'Rakistaba Adama', image: 'ionibowcher.png' },
      { name: 'Kobena Bio paul', image: 'ivanmagalhaes.png' },
      { name: 'Coulibaly Romaric', image: 'onyamalimba.png' },
      { name: 'Tape nancy ', image: 'stephenshaw.png' },
      { name: 'Ncho Bony', image: 'xuxuefeng.png' },
    ];

    this.statuses = [
      { label: 'Analyse', value: 'En examen' },
      { label: 'Dossier', value: 'Dossier en cours...' },
      { label: 'Consultation', value: 'En consultation' },
      { label: 'Examen', value: 'En examen' },
      { label: 'Terminé', value: 'Traitement terminé' },
      { label: 'Suspendu', value: 'Innactif' },
    ];
  }

  clear(table: Table) {
    table.clear();
  }

  getSeverity(status: string) {
    switch (status) {
      case 'Dossier en cours...':
        return 'danger';

      case 'Traitement terminé':
        return 'success';

      case 'Innactif':
        return 'info';

      case 'En examen':
        return 'warning';

      default:
        return 'secondary';
    }
  }

  onInputChange(event: Event | null) {
    if (event !== null && event.target instanceof HTMLInputElement) {
      const value = event.target.value;
      // Faites quelque chose avec la valeur
      this.dt2.filterGlobal(value, 'contains');
    }
  }
}
