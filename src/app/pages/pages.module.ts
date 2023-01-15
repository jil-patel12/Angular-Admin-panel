import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { QuillModule } from 'ngx-quill'
import { NgApexchartsModule } from "ng-apexcharts"
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { UIModule } from '../shared/ui/ui.module';

import { PagesRoutingModule } from './pages-routing.module';
import { LayoutsModule } from '../layouts/layouts.module';

import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEditUserComponent } from './usermanagement/add-edit-user/add-edit-user.component';
import { ContentManagementComponent } from './content-management/content-management.component';
import { NotificationManagementComponent } from './notification-management/notification-management.component';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { ProgressBarModule } from 'primeng/progressbar';
import { GalleriaModule } from 'primeng/galleria';
import { InputTextModule } from 'primeng/inputtext';

import { MultiSelectModule } from 'primeng/multiselect';
import { FileUploadModule } from 'primeng/fileupload';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarModule } from 'primeng/calendar';

import { CmsComponent } from './cms/cms.component';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    UsermanagementComponent,
    ProfileComponent,
    DashboardComponent,
    AddEditUserComponent,
    NotificationManagementComponent,
    CmsComponent,
    ContentManagementComponent,
    NotificationManagementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxDaterangepickerMd.forRoot(),
    PagesRoutingModule,
    ReactiveFormsModule,
    LayoutsModule,
    UIModule,
    NgApexchartsModule,
    TableModule,
    ButtonModule,
    DropdownModule,
    SkeletonModule,
    SidebarModule,
    TabViewModule,
    AccordionModule,
    ProgressBarModule,
    GalleriaModule,
    InputTextModule,
    DialogModule,
    MultiSelectModule,
    QuillModule.forRoot(),
    FileUploadModule,
    HttpClientModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
    DynamicDialogModule,
    CalendarModule
  ],
  providers: [DialogService],
  entryComponents: [AddEditUserComponent]
})
export class PagesModule { }