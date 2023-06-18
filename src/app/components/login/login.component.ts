import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { TokenService } from '../../services/auth/token.service';
import { UsersService } from '../../services/auth/users.service';
import { User, createUserDTO } from '../../models/user.model';
import { Auth } from '../../models/auth.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  //--------PROPIEDADES--------
  email:string = "maria@mail.com";
  password:string = '12345';
  user: User = {
    id: '',
    name: '',
    email: '',
    password: '',
    token: ''
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
    const user:createUserDTO = {
      name: '',
      email: '',
      password: '',
    }
    this.usersService.create(user).subscribe((user) => {
      console.log('user', user);
    });
  }

  login() {
    this.authService.login(this.email, this.password).subscribe((result) => {
      //console.log('result', result.access_token);
      this.tokenService.setToken(result.access_token);
      this.router.navigate(['/catalogo']);
    });
  }

  getProfile() {
    this.authService.profile().subscribe((result) => {
      console.log('result', result);
      this.user = result;
    });
  }
}
