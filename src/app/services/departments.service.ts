import { Injectable } from '@angular/core';
import { Department } from '../models/department';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  constructor(private http: HttpClient) {}

  getAllDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(
      'https://localhost:7243/api/Departments/GetAllDepartments'
    );
  }
}
