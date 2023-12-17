import { Component } from '@angular/core';
import Swal from 'sweetalert2';

import { OnExit } from 'src/app/guards/exit.guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnExit {

  // --------- attributes ------------
  public register = {
    name: '',
    email: '',
    password: '',
    status: false
  };

  // --------- constructor ------------
  constructor() { }


  // --------- methods ------------
  onExit(){
    return Swal.fire({
      title: 'Are you sure?',
      text: "Be sure to save changes before leaving",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      // confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        return true;
      } else {
        return false;
      }
    });
  }

  onRegister() {
    //console.log('this.register');
    this.register.status = true;
  }
}
