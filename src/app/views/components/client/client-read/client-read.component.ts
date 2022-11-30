import { Component,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.css']
})
export class ClientReadComponent {
  clients:Client [] = [];
 
  displayedColumns: string[] = ['id', 'name', 'cpf', 'cellphone number', 'action'];
  dataSource = new MatTableDataSource<Client>(this.clients);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service : ClientService,
    private router : Router
    ){};

  ngAfterViewInit() {
    this.findAll();
  }


  findAll():void{
      this.service.findAll().subscribe((res) => {
      this.clients = res;
      this.dataSource.paginator = this.paginator;
      this.dataSource = new MatTableDataSource<Client>(this.clients);

    })

}

  navigateToCreate():void{
    this.router.navigate(['clients/create'])
}
}
