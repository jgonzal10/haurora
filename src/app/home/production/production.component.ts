import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {


  }


   public selectr() {
   console.log('assignment')

  }

}
