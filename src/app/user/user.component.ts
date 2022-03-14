import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

   users: User[] | undefined ; 
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[])=>{
      console.log(data)
    this.users=data.splice(1,10) ;
    });
  }

    showDetails = true;

    moreInfo() {
      this.userService.getUsers().subscribe((data: User[])=>{
        console.log(data);
      this.users=data
    });
  
}}
