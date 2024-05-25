import { Component, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-connexion-form',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: '../../../assets/Login_v4/index.html',
  styleUrls: []
})
export class ConnexionFormComponent {
  constructor( private authService : AuthService ) {}
  user = {
    usermail:'',
    password:''
  }
login(){
  this.authService.authenticate(this.user.usermail,this.user.password)
}
}
