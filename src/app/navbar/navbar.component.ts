import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  menuItems: { home: string; startTracking: string; stopTracking: string; };
  ngOnInit() {
    this.menuItems = {
      home: 'home',
      startTracking: 'Empezar Servicio',
      stopTracking: 'Terminar Servicio',
    };
  }

}
