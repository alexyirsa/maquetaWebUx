import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { MatCardModule } from '@angular/material/card';
import { Titulo1Component } from './components/titulo1/titulo1.component';
import { HoraComponent } from './components/hora/hora.component';
import { Titulo2Component } from './components/titulo2/titulo2.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule  } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TarjetasComponent,
    Titulo1Component,
    HoraComponent,
    Titulo2Component,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
