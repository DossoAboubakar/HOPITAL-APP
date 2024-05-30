import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule, ButtonModule],
  templateUrl: '../../../assets/skydash/dashboard.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  userListIsLoaded = false;
  
  loadUserList() {
    this.userListIsLoaded = !this.userListIsLoaded;
  }
}
