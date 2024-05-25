import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './Login_v4/css/main.css'
})
export class RegisterComponent {
  constructor (private authserivce:AuthService){}
  user = {
    usermail:'',
    password:''
  }
register() {
  this.authserivce.register(this.user.usermail,this.user.password)
}

}
