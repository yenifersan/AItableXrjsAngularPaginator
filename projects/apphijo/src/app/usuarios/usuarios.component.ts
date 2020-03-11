import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import { UserService } from '../user.service';
import { DataSource } from '@angular/cdk/table';
import { Observable, from, merge } from 'rxjs';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'apphijo-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  MyDataSource: MatTableDataSource<any>; 
  displayedColumns = ['id','name', 'username','email','address']
  //pagination
  @ViewChild(MatPaginator) paginator: MatPaginator;  
  @ViewChild(MatSort) sort: MatSort;  

  //cuando existe un protected inicializado en el construcctor 
  //protected comparte solo con clases que la heredan 
  constructor(private userService: UserService) {
  }
 
  form:FormGroup = new FormGroup({
    id: new FormControl(false),
    name: new FormControl(false),
    username: new FormControl(false),
    email: new FormControl(false),
    address: new FormControl(false)
  });

  id = this.form.get('id');
  name = this.form.get('name');
  username = this.form.get('username');
  email = this.form.get('email');
  address = this.form.get('address');

  // cbValues;

   /**
   * Control column ordering and which columns are displayed.
   */

  ngOnInit(): void {
    this.RenderDataTable();   
  }
  RenderDataTable() { 
 
    this.userService.getUsers().subscribe(  
      data => {  
        // this.MyDataSource = new MatTableDataSource();  
        this.MyDataSource.data = data; 
        // this.MyDataSource.sort = this.sort;  
        // this.MyDataSource.paginator = this.paginator;  
        // console.log(this.MyDataSource.data);  
      },  
      error => {  
        console.log('There was an error while retrieving Albums !!!' + error);  
      });  
  }  

  changeHeaders(){
    this.displayedColumns= ['id','name', 'username'];
  }
 }

    


