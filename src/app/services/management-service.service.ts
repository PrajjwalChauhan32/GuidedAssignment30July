import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Department } from '../common/department';
import{Employee} from '../common/employee';

@Injectable({
  providedIn: 'root'
})
export class ManagementServiceService {

  empurl= "http://localhost:8080/api/emp"
  depturl= "http://localhost:8080/api/dept"
  

  constructor(private httpclient : HttpClient) { }
  getAllEmployee() : Observable<Employee[]>{
    return this.httpclient.get<getEmployeeResponse>(this.empurl).pipe(map(Response => Response._embedded.employees))
  }
  getAllDepartment():Observable<Department[]>{
    return this.httpclient.get<GetResponseDepartment>(this.depturl).pipe(map(Response => Response._embedded.departments));

  }
}
interface getEmployeeResponse{
  _embedded:{
    employees : Employee[]
  }
}

interface GetResponseDepartment{
  _embedded :{
   departments :Department[];
  }
 
 }