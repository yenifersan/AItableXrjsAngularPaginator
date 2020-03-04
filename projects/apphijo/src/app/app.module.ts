import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { UsuariosComponent, UsuariosDataSource } from './usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { UserService } from './user.service';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CountButtonComponent } from './count-button/count-button.component';

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
  
  ],
  exports:[  
   MatTableModule ,MatButtonModule,MatPaginatorModule,MatSortModule  
  ],  
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
