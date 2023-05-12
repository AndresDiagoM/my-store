import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  menuStatus = false;

  ocultarMenu($event: any) {
    this.menuStatus = !this.menuStatus;
    //console.log(this.menuStatus);
  }
}
