import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserListTableComponent } from './user-list-table/user-list-table.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterModule,UserListTableComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

}
