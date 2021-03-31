import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {userDetails} from '../../userDetails.js';

@Component({
  selector: 'app-show-user-detaiils',
  templateUrl: './show-user-detaiils.component.html',
  styleUrls: ['./show-user-detaiils.component.css']
})
export class ShowUserDetaiilsComponent implements OnInit {
id: any;
candy: any;
  constructor(public route: ActivatedRoute) {
      this.route.params.subscribe( (param) => {
        this.id = param.id
      })
   }

  ngOnInit(): void {
    console.log(this.id)
    this.candy = userDetails.filter( item => item.id == this.id);
    console.log(this.candy)

  }

}
