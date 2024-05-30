import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-connexion-form',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: '../../../assets/Login_v4/login.html',
  styleUrls: [],
})
export class ConnexionFormComponent implements AfterViewInit {
  @ViewChild('loginButton', { static: true }) loginButton:
    | ElementRef
    | undefined;

  constructor(private authService: AuthService) {}

  ngAfterViewInit(): void {
    this.loginButton?.nativeElement.addEventListener(
      'click',
      this.login.bind(this)
    );
  }

  user = {
    usermail: '',
    password: '',
  };
  
  login() {
    this.authService.authenticate(this.user.usermail, this.user.password);
  }
}
