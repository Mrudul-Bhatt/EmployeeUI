import {Component, OnInit} from '@angular/core';
import {Department} from 'src/app/models/department';
import {DepartmentsService} from 'src/app/services/departments.service';
import {MatDialog} from "@angular/material/dialog";
import {ModalContentComponent} from "../modal-content/modal-content.component";
import {DataShareServiceService} from "../../services/data-share-service.service";

@Component({
  selector: 'app-departments-home',
  templateUrl: './departments-home.component.html',
  styleUrls: ['./departments-home.component.css'],
})
export class DepartmentsHomeComponent implements OnInit {
  departments: Department[] = [];

  constructor(private departmentsService: DepartmentsService,
              public dialog: MatDialog,
              public dataShareService: DataShareServiceService) {
  }

  openDialog() {

    const dialogRef = this.dialog.open(ModalContentComponent, {width: '500px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

    });
  }

  ngOnInit(): void {
    this.departmentsService.getAllDepartments().subscribe({
      next: (departments) => {
        console.log(departments);
        this.departments = departments;
      },
      error: (err) => console.log(err),
    });
  }
}
