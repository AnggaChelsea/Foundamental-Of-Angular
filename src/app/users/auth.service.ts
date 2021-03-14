import { Injectable } from '@angular/core'
import { IUser } from './user.model'

@Injectable()
export class AuthService {

  userData?: IUser

  loginService(username:string, password:string){
    this.userData = {
      id:1,
      username:username,
      firstName:'angga',
      lastName:'lesmana',
      password:'sayangmamah' 
    }
  }

  isAuthentication(){
    return !!this.userData
  }
  isNotAuth(){
    return this.userData
  }

  updateProfile(firstName:string, lastName:string){
    this.userData!.firstName = firstName
    this.userData!.lastName = lastName

  }


}