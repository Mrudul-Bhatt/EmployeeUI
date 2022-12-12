import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataShareServiceService {

  private departmentId: string = '';
  private departmentName: string = ''

  constructor() {
  }

  setDepartmentId(id: string) {
    this.departmentId = id;
  }

  setDepartmentName(name: string) {
    this.departmentName = name;
  }

}
