import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Technical } from '../models/technical';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TechnicalService {

  baseUrl: String = "https://shadhekyfullstackcourse.herokuapp.com"

  constructor(private http : HttpClient,
      private snack : MatSnackBar
    ) { }

  findAll():Observable<Technical[]>{
    const url = this.baseUrl + "/technicals";
    return this.http.get<Technical[]>(url);
  }

  create(technical : Technical): Observable<Technical>{
    const url = this.baseUrl + "/technicals";
    return this.http.post<Technical>(url, technical);

  }

  update(technical : Technical): Observable<Technical>{
    const url = this.baseUrl + "/technicals/" + technical.id;
    return this.http.put<Technical>(url, technical);

  }

  delete(technical : Technical): Observable<void>{
    const url = this.baseUrl + "/technicals/" + technical.id;
    return this.http.delete<void>(url);

  }

  findById(id : any ): Observable<Technical>{
    const url = this.baseUrl + "/technicals/" + id;
    return this.http.get<Technical>(url);

  }

  message(msg : string):void{
    this.snack.open(msg, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    });
  }

}
