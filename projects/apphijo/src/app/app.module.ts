import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// import { UsuariosComponent, UsuariosDataSource } from './usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { AppComponent } from './app.component';
import { MatTableModule} from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserService } from './user.service';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CountButtonComponent } from './count-button/count-button.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    CountButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule ,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule
  ],
  exports:[  
   MatTableModule ,MatButtonModule,MatPaginatorModule,MatSortModule, MatCheckboxModule 
  ],  
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
