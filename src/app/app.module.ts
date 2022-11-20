import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
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
import { TaskAddComponent } from './components/task-add/task-add.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TaskListComponent,
    FilterStringPipe,
    TaskAddComponent,
    TaskDetailsComponent

  ],
  imports: [
    BrowserModule,
    MatPaginatorModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    Ng2SearchPipeModule,
    MatFormFieldModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
