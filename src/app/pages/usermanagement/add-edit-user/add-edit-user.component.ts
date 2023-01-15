import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-add-edit-user',
    templateUrl: './add-edit-user.component.html',
    styleUrls: ['./add-edit-user.component.scss'],
})
export class AddEditUserComponent implements OnInit {

    addUserForm: FormGroup;
    submitted = false;

    isData;

    constructor(private fb: FormBuilder,
        private ref: DynamicDialogRef,
        config: DynamicDialogConfig,
        private dialogRef: DynamicDialogRef
    ) {
        this.isData = config;
    }

    get f() {
        return this.addUserForm.controls;
    }

    ngOnInit(): void {
        this.addUserForm = this.fb.group({
            userId: [],
            fname: ['', Validators.required],
            lname: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            gender: ['male', Validators.required],
            age: ['', Validators.required],
            dob: ['', Validators.required],
            profile: ['', Validators.required],
        });

        if (this.isData.data.type == 'edit') {
            this.addUserForm.patchValue({ userId: this.isData.data.userId })
        }
    }

    onSubmit() {
        this.submitted = true;
        if (this.addUserForm.invalid) {
            return
        } else {
            this.ref.destroy();
        }
    }

    hideDialog(): void {
        this.dialogRef.close();
    }
}
