import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ProfileComponent } from './profile/profile.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { ContentManagementComponent } from './content-management/content-management.component'
import { NotificationManagementComponent } from './notification-management/notification-management.component';
import { CmsComponent } from './cms/cms.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'usermanagement', component: UsermanagementComponent },
  { path: 'cms-management', component: ContentManagementComponent },
  { path: 'notification-management', component: NotificationManagementComponent },
  { path: 'cms', component: CmsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
