import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";

import { DialogService } from "primeng/dynamicdialog";
/* Components */

import { AddEditUserComponent } from "./add-edit-user/add-edit-user.component";
import { UserManagement } from "src/app/core/models/user-management";
import { UserService } from "src/app/core/services/user.service";
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: "app-usermanagement",
  templateUrl: "./usermanagement.component.html",
  styleUrls: ["./usermanagement.component.scss"],
  providers: [ConfirmationService, MessageService],
})
export class UsermanagementComponent implements OnInit {

  loading = true;

  selectedProducts: UserManagement[];
  users: UserManagement[];
  product: UserManagement;

  constructor(
    // private modalService: NgbModal,
    // public dialog: MatDialog,
    private fb: FormBuilder,
    private userService: UserService,
    public dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().then((data) => {
      this.users = data;
      this.loading = false;
    });
  }

  addNewUser(ele: string, userId: Number = 0) {
    var data;
    if (ele == "add") {
      data = {
        type: ele,
      };

      this.dialogService.open(AddEditUserComponent, {
        header: "Add Product",
        width: "600px",
        data: data,
        dismissableMask: true,
      });
    } else {
      data = {
        type: ele,
        userId: userId,
      };

      this.dialogService.open(AddEditUserComponent, {
        header: "Edit Product",
        width: "600px",
        data: data,
        dismissableMask: true,
      });
    }
  }

  deleteUser(content) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + content.user_name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      }
    });
  }
}
