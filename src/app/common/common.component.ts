import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/common/employee';
import { ManagementServiceService } from 'src/app/services/management-service.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class EmpListComponent implements OnInit {
 
  constructor(private service :ManagementServiceService) { }
  employees: Employee[];
 
  ngOnInit(): void {
    this.listofEmployees()
  }
  listofEmployees(){
    this.service.getAllEmployee().subscribe(data=>{
      console.log(data)
      this.employees =data;
    }
    )
  }
}