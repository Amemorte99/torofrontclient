import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SweetAlertService } from 'src/app/shared/common/sweet-alert.service';
import { FormulaireService } from '../../common/formulaire.service';
import { AccountService } from '../cvcontainer/account/account.service';
import { AuthService } from './common/auth.service';

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
    private sweetAlert: SweetAlertService
  ) { }

  ngOnInit(): void {



    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]

    })
  }



  connexion(){



    console.log(localStorage.getItem("token"));
    this.authService.login("amemorte", "1234ma").subscribe();

  }

}
