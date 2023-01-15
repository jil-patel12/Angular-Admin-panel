import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/core/models/content-management';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContentService } from 'src/app/core/services/content.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-content-management',
    templateUrl: './content-management.component.html',
    styleUrls: ['./content-management.component.scss'],
    providers: [ConfirmationService, MessageService]
})
export class ContentManagementComponent implements OnInit {

    contentDialog: boolean;
    contents: Content[];

    submitted: boolean;
    totalRecords = 0;
    loading = true;
    fileHolder: any;

    contentPopup: string = 'Add';

    contentForm:FormGroup;

    constructor(private contentService: ContentService, private formBuilder: FormBuilder, private messageService: MessageService, private confirmationService: ConfirmationService) { }

    get f(): { [key: string]: any } {
        return this.contentForm.controls;
    }

    ngOnInit() {
        this.contentService.getContent().then(data => {this.contents = data;
            this.loading = false;
        });

        this.contentForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            description: ['', [Validators.required]],
            price: ['', [Validators.required]],
            file: ['', [Validators.required]]
        });
    }

    openNew() {
        this.submitted = false;
        this.contentDialog = true;
        this.contentPopup = 'Add';
        this.contentForm.reset();
    }

    editProduct(content: Content) {
        this.contentPopup = 'Edit';
        this.contentForm.setValue({
            name: content.name,
            description: content.description,
            price: content.price,
            file: content.file
        });

        this.contentDialog = true;
    }

    deleteProduct(content: Content) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + content.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
            }
        });
    }

    hideDialog() {
        this.contentDialog = false;
        this.submitted = false;
    }

    onUpload(event) {
        if (event.target.files && event.target.files.length) {
            this.fileHolder = event.target.files[0];
        }
    }
    
    saveProduct() {
        this.submitted = true;

        if (this.contentForm.valid) {
            
        }
    }

  
}
