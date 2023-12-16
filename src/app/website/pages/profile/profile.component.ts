import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/auth/token.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // -- Propiedades --
  user: User | null = null;

  // -- Constructor --
  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {
  }

  ngOnInit(): void {
    this.getProfile();
  }

  // -- Métodos --
  getProfile() {
    this.authService.user$.subscribe(result => {
      this.user = result;
    });
  }
}
