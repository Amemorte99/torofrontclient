import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../common/formation.service';
import { Router } from '@angular/router';
import { UeaService } from '../../common/uea.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  ueaConnecte: any;
  isCollapsed = false;
  role!: number;
  nombreUEA!:number;
  nombreUEAAdmin!:number;

  token: any;
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    console.log('manes token', token);

    this.listeFormation();
  
    this.count();
    this.countA();

    this.ueaConnecte = JSON.parse(localStorage.getItem('ueaInfo')!);

    console.log('ueaInfo', this.ueaConnecte);
    // this.role=this.ueaConnecte.roles[0].id;

    for (const item of this.ueaConnecte.roles) {
      this.role = item.id;
    }
  }

  constructor(
    private formationService: FormationService,
    private router: Router,
    private ueaservice:UeaService
  ) {}

  count(){
    this.ueaservice.countUEA().subscribe((_value) => {

      this.nombreUEA=_value;

    });
  }
  countA(){
    this.ueaservice.countUEAAdmin().subscribe((_value) => {

      this.nombreUEAAdmin=_value;

    });
  }
  listeFormation() {
    this.formationService.ListFormation().subscribe((values) => {
      if (values) {
        // this.prof = data.filter((dt: { ids: number; }) => dt.ids == this.id)
        console.log('list formation', values);
      }
    });
  }
}
