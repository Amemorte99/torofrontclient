import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-list-uea',
  templateUrl: './menu-list-uea.component.html',
  styleUrls: ['./menu-list-uea.component.css']
})
export class MenuListUEAComponent implements OnInit {

  route: string | undefined;

  idAgent!: number;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.idAgent=1;

    this.route = this.router.url
    console.log(this.route)

    
  }

}
