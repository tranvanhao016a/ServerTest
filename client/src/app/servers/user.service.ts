import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  createUser(idToken: string) {
    console.log('debug create user');
    console.log(idToken);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${idToken}`
    });
    return this.httpClient.post<User>('https://localhost:3000/v1/user', {}, { headers: headers })
  }

}
