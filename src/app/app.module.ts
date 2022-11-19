import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterStringPipe } from './components/service/filter-string.pipe';
import { TaskManagementComponent } from './components/task-management/task-management.component';
import { TaskPreviewComponent } from './components/task-management/task-preview/task-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskManagementComponent,
    FooterComponent,
    TaskPreviewComponent,
    FilterStringPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    Ng2SearchPipeModule,
    MatFormFieldModule,
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
