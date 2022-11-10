import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
// import { ConfigInterceptor } from './common/config.interceptor';
// import { FooterComponent } from './layouts/footer/footer.component';
// import { HeaderComponent } from './layouts/header/header.component';
// import { NavbarComponent } from './layouts/navbar/navbar.component';
import { LayoutsModule } from './layouts/layouts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FileUploadModule } from '@iplab/ngx-file-upload';
// import { CreateComponent } from './modules/utd/components/create/create/create.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LayoutsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    FileUploadModule

  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: ConfigInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
