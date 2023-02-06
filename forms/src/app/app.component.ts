import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // @ViewChild('f') formed: NgForm;

  // answer = '';
  
  genders= ['Male', 'Female'];
      // Template driven input Forms Approach
  // user = {
  //   username: '',
  //   email: '',
  //   secret: '',
  //   answer: '',
  //   gender: ''
  // };

  // submitForm = false;
  
  //  onSubmit(form: NgForm) {
  //    console.log(form); 
  // }

  // sampleUserName() {
  //   const sampleName = 'batMan';
    // this.formed.setValue({
    //   userData: {
    //     username: sampleName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   quesAns: '',
    //   gender: 'Male'
    // });
  //   this.formed.form.patchValue({
  //     userData: {
  //       username: sampleName
  //     }
  //   });
  // }

  //  onSubmit() {
  //     this.submitForm = true;
  //     this.user.username = this.formed.value.userData.username;
  //     this.user.email = this.formed.value.userData.email;
  //     this.user.secret = this.formed.value.secret;
  //     this.user.answer = this.formed.value.quesAns;
  //     this.user.gender = this.formed.value.gender;

  //     this.formed.reset();
  //  }

  // Reactive input Forms Approach

  signupForm: FormGroup;
  forbiddenUsername = ['shaggy', 'opium'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
      'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('Male'),
      hobbies: new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );

    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
  }

  onSubmit() {
    console.log(this.signupForm);    
  }

  onAddHobbies() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsername.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500); 
    });
    return promise;  
  }
}
