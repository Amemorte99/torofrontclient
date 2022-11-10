import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FileUploadControl, FileUploadValidators } from '@iplab/ngx-file-upload';
import { BehaviorSubject, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  hide = true;
  hide1 = true;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  constructor() {}
  ngOnInit(): void {
    this.subscription = this.control.valueChanges.subscribe((values: Array<File>) => this.getImage(values[0]));

  }
  selectedFile: any = null;

  onFileSelected(event: any): void {
      this.selectedFile = event.target.files[0] ?? null;

  }

  public readonly uploadedFile: BehaviorSubject<String | any> = new BehaviorSubject(null);

  private subscription!: Subscription;

  public readonly control = new FileUploadControl(
      { listVisible: true, accept: ['image/*'], discardInvalid: true, multiple: false },
      [FileUploadValidators.accept(['image/*']), FileUploadValidators.filesLimit(1)]
  );



  public ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  private getImage(file: File): void {
      if (FileReader && file) {
          const fr = new FileReader();
          fr.onload = (e : any) => this.uploadedFile.next(e.target.result);
          fr.readAsDataURL(file);
      } else {
          this.uploadedFile.next(null);
      }
  }


}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


