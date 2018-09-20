import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientCreateComponent } from './patient-create/patient-create.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';

const appRoutes: Routes = [
  {
    path: 'patients',
    component: PatientComponent,
    data: { title: 'Patient List' }
  },
  {
    path: 'patient-details/:id',
    component: PatientDetailComponent,
    data: { title: 'Patient Details' }
  },
  {
    path: 'patient-create',
    component: PatientCreateComponent,
    data: { title: 'Create Patient' }
  },
  {
    path: 'patient-edit/:id',
    component: PatientEditComponent,
    data: { title: 'Edit Patient' }
  },
  {
    path: '',
    redirectTo: '/patients',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientDetailComponent,
    PatientCreateComponent,
    PatientEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
