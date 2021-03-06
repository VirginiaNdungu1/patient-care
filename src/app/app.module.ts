import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { FilterPipe } from './searchpatient.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientFormComponent,
    EditPatientComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
