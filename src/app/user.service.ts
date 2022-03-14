import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl= 'https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v2/rates/exchangerates?web-api-key=c52a0682-4806-4903-828f-6cc66508329e'

  constructor(public http:HttpClient) { }

  getUsers():Observable < User[]>{
    return this.http.get < User[]>(`${this.baseUrl}`);
  }
}
