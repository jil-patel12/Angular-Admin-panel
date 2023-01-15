import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SimplebarAngularModule } from 'simplebar-angular';
// import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from '../shared/ui/ui.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { VerticalComponent } from './vertical/vertical.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [LayoutComponent, SidebarComponent, TopbarComponent, FooterComponent, VerticalComponent, LoaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    MenuModule,
    ProgressSpinnerModule,
    // NgbDropdownModule,
    UIModule,
    SimplebarAngularModule,
    
  ],
  exports: [LoaderComponent]
})
export class LayoutsModule { }
