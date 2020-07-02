import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MenuFoldOutline , MenuUnfoldOutline, UserOutline, TeamOutline, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { UserListComponent } from './userList/userList.component';
import { UserEditComponent } from './userEdit/userEdit.component';

const icons: IconDefinition[] = [ MenuFoldOutline , MenuUnfoldOutline, UserOutline, TeamOutline, AlertOutline, AlertFill ];

@NgModule({
   declarations: [
      AppComponent,
      UserListComponent,
      UserEditComponent
   ],
   imports: [
      NzIconModule.forRoot(icons),
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      NzIconModule,
      NzMenuModule,
      NzBreadCrumbModule,
      NzLayoutModule,
      NzDropDownModule,
      NzTreeSelectModule,
      NzTableModule,
      NzButtonModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
