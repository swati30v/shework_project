import { Component, OnInit } from '@angular/core';
import {userDetails} from '../userDetails.js';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  urs = userDetails
  constructor() {
    this.urs = userDetails
   }

  ngOnInit(): void {
    console.log(this.urs)
  }

}
