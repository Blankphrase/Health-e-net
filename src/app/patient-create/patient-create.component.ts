import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {

  patientForm: FormGroup;
  first_name: string = '';
  last_name: string = '';
  date_of_birth: string = '';
  telephone: string = '';
  email_address: string = '';
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.patientForm = this.formBuilder.group({
      'first_name' : [null, Validators.required],
      'last_name' : [null, Validators.required],
      'date_of_birth' : [null, Validators.required],
      'telephone' : [null, Validators.required],
      'email_address' : [null, Validators.required],
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.postPatient(form)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/patient-details', id]);
      }, (err) => {
        console.log(err);
      });
  }

}
