import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  menuStatus = false;
  counter = 0;

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.storeService.cartBehavior$.subscribe((cart) => {
      this.counter = cart.length;
    });
  }

  ocultarMenu($event: any) {
    this.menuStatus = !this.menuStatus;
    //console.log(this.menuStatus);
  }
}
