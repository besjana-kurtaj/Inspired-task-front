import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string="https://localhost:7104/api/User/"
  constructor(private http: HttpClient) { }
  signUp(userobj:any){
  return this.http.post<any>(`${this.baseUrl}AddUser`,userobj)
  }
  login(login:any){
    return this.http.post<any>(`${this.baseUrl}Login`,login)

  }
  getAllUser(){   
    return this.http.get(this.baseUrl)
    }
    deleteUser(id: any) {
      return this.http.delete(`${this.baseUrl}${id}`);
    }
    updateUser(id: any, user: any) {
      return this.http.put(`${this.baseUrl}${id}`, user);
    }
  getUserById(id: any) {
    return this.http.get(`${this.baseUrl}${id}`);
  }
}
