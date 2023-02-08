import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SweetAlertService } from 'src/app/shared/common/sweet-alert.service';
import { FormulaireService } from '../../common/formulaire.service';
import { AccountService } from '../cvcontainer/account/account.service';
import { AuthService } from './common/auth.service';
import { HistoriqueUEAService } from 'src/app/modules/uea/common/historique-uea.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormulaireService,
    private authService: AuthService,
    private sweetAlert: SweetAlertService,
    private histoService:HistoriqueUEAService
  ) { }

  ngOnInit(): void {



    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]

    })
  }



  connexion(){

    localStorage.clear();

    console.log(localStorage.getItem("token"));
    this.authService.login("amemorte", "1234ma").subscribe();

  }

}
