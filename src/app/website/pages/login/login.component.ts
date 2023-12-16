import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { TokenService } from '../../../services/auth/token.service';
import { UsersService } from '../../../services/auth/users.service';
import { User, createUserDTO } from '../../../models/user.model';
import { Auth } from '../../../models/auth.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  //--------PROPIEDADES--------
  email = 'maria@mail.com';
  password = '12345';
  user: User = {
    id: '',
    name: '',
    email: '',
    password: '',
    token: '',
  };

  //--------CONSTRUCTOR--------
  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private usersService: UsersService,
    private router: Router
  ) {}

  //--------MÉTODOS--------

  createUser() {
    const user: createUserDTO = {
      name: '',
      email: '',
      password: '',
      role: 'customer',
    };
    this.usersService.create(user).subscribe((user) => {
      console.log('user', user);
    });
  }

  login() {
    this.authService.login(this.email, this.password).subscribe((result) => {
      //console.log('result', result.access_token);
      this.tokenService.setToken(result.access_token);
      // console.log('token', this.tokenService.getToken());
      this.router.navigate(['/home']);
    });
  }

}
