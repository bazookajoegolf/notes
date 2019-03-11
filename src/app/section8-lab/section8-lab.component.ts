import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-section8-lab',
  templateUrl: './section8-lab.component.html',
  styleUrls: ['./section8-lab.component.css']
})
export class Section8LabComponent  {

  form = new FormGroup({
    username: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(5)])
  });

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }
  showForm(f) {
    console.log(f);
    alert(`Username ${f.value.username}  password:    ${f.value.password}`);
  }

}
