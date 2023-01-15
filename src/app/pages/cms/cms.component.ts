import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CMSService } from 'src/app/core/services/cms.service';
import { CMS } from 'src/app/core/models/cms';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.scss']
})
export class CmsComponent implements OnInit {

  cmsContents: CMS[];
  cmsDialog = false;
  cmsForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = true;

  constructor(private cmsService: CMSService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cmsService.getCMS().then(data => {
      this.cmsContents = data;
      this.loading = false;
    });

    this.cmsForm = this.formBuilder.group({
      type: ['select', [Validators.required]],
      content: ['', [Validators.required]],
    });
  }

  get cms(): { [key: string]: any } {
    return this.cmsForm.controls;
  }

  addCMS() {
    this.cmsDialog = true;
    this.submitted = false;
  }

  hideDialog() {
    this.cmsDialog = false;
  }

  cmsSubmit() {
    this.submitted = true;
  }
}
