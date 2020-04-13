import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { JwtHelper } from 'angular2-jwt/angular2-jwt';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
})

export class EmployeeComponent implements OnInit{
  title = 'employees';
  adminVisible: boolean;

  constructor(private router: Router) {}

  employees = [
    {
    	name: "Brock",
    	psi: 1741,
    	division: "App development",
    	project: "Enjoy",
    	role: "Senior Software Engineer"
    },
    {
    	name: "John",
    	psi: 1843,
    	division: "Quality Assurance",
    	project: "FNC",
    	role: "Software Tester"
    },
    {
    	name: "Micheal",
    	psi: 3453,
    	division: "Support and Maintainance",
    	project: "Cisco",
    	role: "Software Engineer"
    },
    {
    	name: "Sarah",
    	psi: 1791,
    	division: "App development",
    	project: "FNC",
    	role: "Associate Software Engineer"
    },
    {
    	name: "James",
    	psi: 4563,
    	division: "Quality Assurance",
    	project: "Swisscom",
    	role: "Senior Testing Engineer"
    },
    {
    	name: "Amy",
    	psi: 3342,
    	division: "App development",
    	project: "Enjoy",
    	role: "Team Lead"
    }
  ]

  getEmployeeCount(){
  	return this.employees.length;
  }

  getDevEmployeesCount(){
  	return this.employees.filter(e => e.division === "App development").length;
  }

  getQAEmployeesCount(){
  	return this.employees.filter(e => e.division === "Quality Assurance").length;
  }

  getSupportEmployeesCount(){
  	return this.employees.filter(e => e.division === "Support and Maintainance").length;
  }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  ngOnInit() {
    let token = localStorage.getItem('token');

    if(!token)
      return;

    let jwtHelper = new JwtHelper();

    if(jwtHelper.decodeToken(token).admin)
      this.adminVisible = true;
    else
      this.adminVisible = false;
  }
}
