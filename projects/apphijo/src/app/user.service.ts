import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }


  // To fill the Datatable with Albums [Dummy Data]  

  
  /*getUsers() {
    return this.http.get('https://randomuser.me/api/?results=25');
  }
  */
  
}
