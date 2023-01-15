import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/core/models/notification';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-notification-management',
  templateUrl: './notification-management.component.html',
  styleUrls: ['./notification-management.component.scss']
})
export class NotificationManagementComponent implements OnInit {

  loading = true;

  productDialog: boolean;
  notifications: Notification[];
  users = ['aaa', 'bbb', 'ccc', 'ddd']
  submitted: boolean;

  notificationform: FormGroup;

  constructor(private notificationService: NotificationService, private fb: FormBuilder) { }

  ngOnInit() {
    this.notificationService.getNotification().then(data => {
      this.notifications = data;
      this.loading = false;
    });

    this.notificationform = this.fb.group({
      title: ['', [Validators.required]],
      message: ['', [Validators.required]],
      description: ['', [Validators.required]],
      user_id: [null, [Validators.required]]
    });
  }

  get f(): { [key: string]: any } {
    return this.notificationform.controls;
  }

  openNew() {
    this.submitted = false;
    this.productDialog = true;
    this.notificationform.reset();
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;
    if (this.notificationform.invalid) {
      return;
    } else {
      this.productDialog = false;
    }
  }
}
