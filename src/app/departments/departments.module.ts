import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DepartmentsRoutingModule} from './departments-routing.module';
import {ModalComponent} from './modal/modal.component';
import {DepartmentsHomeComponent} from './departments-home/departments-home.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {ModalContentComponent} from './modal-content/modal-content.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [DepartmentsHomeComponent, ModalComponent, ModalContentComponent],
  imports: [CommonModule, DepartmentsRoutingModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  exports: [ModalComponent],
})
export class DepartmentsModule {
}
