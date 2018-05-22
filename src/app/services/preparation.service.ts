import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import {map, catchError} from rxjs/operators
//import { Observable } from 'rxjs';

@Injectable()
export class PreparationService {
 // private url: string = "http://localhost:9003/todaysPreparations";
  constructor(private http: Http) { }
/*   getTodaysPreparations(){
  //  return this.http.get(this.url)
   //   .map(res => res.json());
  }
*/
}