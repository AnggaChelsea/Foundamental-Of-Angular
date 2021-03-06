import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { control } from 'leaflet';
import { ISession } from '../../shared/index';
@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styles: [
    `
      em {
        float: right;
        color: red;
        padding-left: 10px;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error ::-webkit-input-placeholder {
        color: #999;
      }
      .error :moz-placeholder {
        color: #999;
      }
      .error ::moz-placeholder {
        color: #999;
      }
      .error :-ms-input-placeholder {
        color: #999;
      }
    `,
  ],
})
export class CreateSesssionComponent implements OnInit {
  newSessionForm!: FormGroup;
  name!: FormControl;
  presenter!: FormControl;
  duration!: FormControl;
  level!: FormControl;
  abstract!: FormControl;
  @Output() savesNewSession = new EventEmitter
  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [
      Validators.required,
      Validators.maxLength(400), this.restrictWord
    ]);



    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    });
  }
  saveSession(formValues: any) {
    let session: ISession = {
      id: formValues.undefine,
      name: formValues.name,
      presenter: formValues.presenter,
      duration: +formValues.duration,
      level: formValues.level,
      abstract: formValues.abstract,
      voters: [],
    };
    this.savesNewSession.emit(session)
  }

  private restrictWord(control:FormControl): {[key:string] :any}{
    return control.value.includes('foo')?{'restrictWord':'foo'} : null!
  }
 


}
