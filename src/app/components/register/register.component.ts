import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: '../../../assets/Login_v4/register.html',
  styleUrls: [],
})
export class RegisterComponent {
  @ViewChild('registerButton', { static: true }) registerButton:
    | ElementRef
    | undefined;

  constructor(private authservice: AuthService) {}

  ngAfterViewInit(): void {
    this.registerButton?.nativeElement.addEventListener(
      'click',
      this.register.bind(this)
    );
  }
  user = {
    usermail: '',
    password: '',
  };

  register() {
    this.authservice.register(this.user.usermail, this.user.password);
  }
}
