import { Component, OnInit } from '@angular/core';
 import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editschema',
  templateUrl: './editschema.component.html',
  styleUrls: ['./editschema.component.scss']
})
export class EditschemaComponent implements OnInit {

  constructor(private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
  	
  }

}
