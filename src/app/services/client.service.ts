import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Technical } from '../models/technical';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {


  baseUrl: String = "https://shadhekyfullstackcourse.herokuapp.com"

  constructor(private http: HttpClient,
    private snack: MatSnackBar
  ) { }

  findAll(): Observable<Client[]> {
    const url = this.baseUrl + "/clients";
    return this.http.get<Client[]>(url);

  }

  findById(id: any):Observable<Client>{
    const url = this.baseUrl + "/clients/" + id
    return this.http.get<Client>(url);
  }

  create(client: Client): Observable<Client> {
    const url = this.baseUrl + "/clients";
    return this.http.post<Client>(url, client);

  }
  
  update(client: Client): Observable<Client>{
    const url = this.baseUrl + "/clients/" + client.id;
    return this.http.put<Client>(url, client);
  }

  delete(client: Client): Observable<void>{
    const url = this.baseUrl + "/clients/" + client.id;
    return this.http.delete<void>(url);
  }

  message(msg: string): void {
    this.snack.open(msg, 'Ok', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000

    });
  }


}
