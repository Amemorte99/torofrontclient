import { Component, OnInit } from '@angular/core';
import { CountryISO, SearchCountryField } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-achat-compte',
  templateUrl: './achat-compte.component.html',
  styleUrls: ['./achat-compte.component.css']
})
export class AchatCompteComponent implements OnInit {

  value = 1;

  constructor() { }

  ngOnInit(): void {
  }

  

  choixPayement(event:any){
    this.value = event
  }

  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom
  ];

}
