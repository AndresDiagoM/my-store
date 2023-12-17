import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { UsersService } from '../../../services/auth/users.service';
import { User, createUserDTO } from '../../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  //--------PROPIEDADES--------
  email = 'admin@mail.com'; // 'admin@mail.com' maria@mail.com
  password = 'admin123'; // 'admin123'  12345
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
    this.authService.login(this.email, this.password).subscribe(()=>{
      this.router.navigate(['/home']);
    });
  }

}
