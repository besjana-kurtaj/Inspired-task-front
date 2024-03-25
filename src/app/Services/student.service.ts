import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseApiUrl: string="https://localhost:7104/api/Student";
  constructor(private http: HttpClient) { }
  addStudent(student: Student) {
 
    return this.http.post(this.baseApiUrl+'/Create', student);
  }
  getAllStudent(){   
    return this.http.get(this.baseApiUrl+'/GetAll')
    }
    deleteStudent(id: any) {
      return this.http.delete(`${this.baseApiUrl}/${id}`);
    }
    updateStudent(id: any, product: any) {
      return this.http.put(`${this.baseApiUrl}/${id}`, product);
    }
  getStudentById(id: any) {
    return this.http.get(`${this.baseApiUrl}/${id}`);
  }
}
