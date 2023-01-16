import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../common/formation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  ueaConnecte: any;
  isCollapsed = false;
  role!: number;

  token: any;
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    console.log('manes token', token);

    this.listeFormation();

    this.ueaConnecte = JSON.parse(localStorage.getItem('ueaInfo')!);

    console.log('ueaInfo', this.ueaConnecte);
    // this.role=this.ueaConnecte.roles[0].id;

    for (const item of this.ueaConnecte.roles) {
      this.role = item.id;
    }
  }

  constructor(
    private formationService: FormationService,
    private router: Router
  ) {}

  listeFormation() {
    this.formationService.ListFormation().subscribe((values) => {
      if (values) {
        // this.prof = data.filter((dt: { ids: number; }) => dt.ids == this.id)
        console.log('list formation', values);
      }
    });
  }
}
