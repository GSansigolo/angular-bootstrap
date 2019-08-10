import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("wrapper").className = "d-flex toggled";
  }
  
  OpenMenu() {
    if (document.getElementById("wrapper").className == "d-flex")
      document.getElementById("wrapper").className = "d-flex toggled";
    else  
      document.getElementById("wrapper").className = "d-flex";
  }

}
