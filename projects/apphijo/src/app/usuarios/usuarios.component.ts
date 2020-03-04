import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'apphijo-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {
  MyDataSource: any 
  dataSource = new UsuariosDataSource (this.userService);
  displayedColumns = ['id','name', 'username','email','address']
  
  //pagination
  @ViewChild(MatPaginator) paginator: MatPaginator;  
  @ViewChild(MatSort) sort: MatSort;  
  //cuando existe un protected inicializado en el construcctor 
  //protected comparte solo con clases que la heredan 
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.RenderDataTable();   

    
  }

  RenderDataTable() { 
     
  this.MyDataSource = this.sort
    this.userService.getUsers()  
      .subscribe(  
      res => {  
        this.MyDataSource = new MatTableDataSource();  
        this.MyDataSource.data = res; 
        this.MyDataSource.sort = this.sort;  
        this.MyDataSource.paginator = this.paginator;  
        console.log(this.MyDataSource.data);  
      },  
      error => {  
        console.log('There was an error while retrieving Albums !!!' + error);  
      });  
  }  
 }

 
export class UsuariosDataSource extends DataSource<any>{
  constructor(private userService: UserService) {
    super();
  }
  //es una funcion que devuelve un observable 
  //devolvera un observable donde está 
  connect(): Observable<any[]>{
    return this.userService.getUsers();
  }
  disconnect(){}
}
    


