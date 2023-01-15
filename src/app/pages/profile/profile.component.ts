import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import Validation from './_utils/validation';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  submitted = false;
  submitted1 = false;

  form: any = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    profile_pic: new FormControl(''),
  });

  pwdForm: any = new FormGroup({
    current_password: new FormControl(''),
    new_password: new FormControl(''),
    confirm_password: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: ['', [Validators.required]],
        first_name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),]],
        last_name: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]],
        profile_pic: ['', [Validators.required]],
      },
    );

    this.pwdForm = this.formBuilder.group({
      current_password: ['', [Validators.required]],
      new_password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
    },
      {
        validators: [Validation.match('new_password', 'confirm_password')]
      });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  get f1(): { [key: string]: AbstractControl } {
    return this.pwdForm.controls;
  }


  // form submit
  onSubmit(): void {
    if (this.form.invalid) {
      this.submitted = true;
      return;
    }


    this.submitted = false;
  }

  authSubmit() {
    this.submitted1 = true;
    if (this.pwdForm.invalid) {

      return;
    }
    this.submitted1 = false;

  }

}
