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
  ueaConnecte:any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.idAgent=1;

    this.route = this.router.url
    

    this.ueaConnecte = JSON.parse(localStorage.getItem('ueaInfo')!);

    
  }


  public userHasRoleOrIsOfTypeUEA1(): boolean {
    return this.ueaConnecte.typeUEA.id === 1 || this.ueaConnecte.roles.some((role: { id: number; }) => role.id === 1);
  }

  
  public userHasRoleOrIsOfTypeUEA2(): boolean {
    return this.ueaConnecte.typeUEA.id === 2 || this.ueaConnecte.roles.some((role: { id: number; }) => role.id === 1);
  }

  public userHasRoleOrIsOfTypeUEA3(): boolean {
    return this.ueaConnecte.typeUEA.id === 3 || this.ueaConnecte.roles.some((role: { id: number; }) => role.id === 1);
  }

  public ueaDroit(): boolean {
    return this.ueaConnecte.roles.some((role: { id: number; }) => role.id === 1);
  }
  
 

  

}
