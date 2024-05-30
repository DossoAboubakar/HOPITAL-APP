import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserListTableComponent } from './user-list-table/user-list-table.component';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterModule, UserListTableComponent, ButtonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  providers:[HttpClientModule]
})
export class UserListComponent {}
