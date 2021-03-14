import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl:'./profile.component.html'
})

export class ProfileComponent implements OnInit {
  profileForm:any = FormBuilder;

  constructor(public fb: FormBuilder, ){
    this.profileForm = this.fb.group({
      firstName:[''],
      lastName:['']
    })
  }

  ngOnInit() {
    // let firstName = new FormControl();
    // let lastName = new FormControl();
    // this.profileForm = new FormGroup({
    //   firstName: firstName,
    //   lastName:lastName
    // })
  }

}