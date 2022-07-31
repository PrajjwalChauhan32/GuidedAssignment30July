import { Injectable } from '@angular/core';
import { Employee } from '../common/employee';
import { Observable,map } from 'rxjs';
//import { map, filter, scan } from 'rxjs/operators';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class services {
  empurl = "http://localhost:8080/api/emp/"
  
  constructor(private httpclient:HttpClient) { }
  getAllEmployee(): Observable<Employee[]> {
    return this.httpclient.get<GetResponseEmployee>(this.empurl)
    .pipe(map(response => response._embedded.employees));

  }
}
interface GetResponseEmployee{
_embedded : {
  employees: Employee[]
}
}


  
