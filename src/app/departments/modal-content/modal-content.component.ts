import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {

  departmentName: string = ''

  constructor() {
  }

  ngOnInit(): void {
  }

  onInput(event: Event) {
    this.departmentName = (event.target as HTMLInputElement).value;
  }

  UpdateDepartment() {
    
  }
}
