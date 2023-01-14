import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/website/components/auth/common/auth.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  ueaConnecte:any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {

    this.ueaConnecte=JSON.parse(localStorage.getItem("ueaInfo")!);
  }

  logout() {
    this.authService.logout();
  }

}
