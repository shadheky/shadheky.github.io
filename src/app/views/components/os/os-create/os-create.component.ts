import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { OS } from 'src/app/models/Os';
import { Technical } from 'src/app/models/technical';
import { ClientService } from 'src/app/services/client.service';
import { OsService } from 'src/app/services/os.service';
import { TechnicalService } from 'src/app/services/technical.service';

@Component({
  selector: 'app-os-create',
  templateUrl: './os-create.component.html',
  styleUrls: ['./os-create.component.css']
})
export class OsCreateComponent implements OnInit{
  
  createError:boolean = false;

  os : OS = {
    technical:'',
    client:'',
    observations:'',
    status:'',
    priority:''

  }

 

  technicals:Technical[] = [];
  clients:Client[] = [];

  constructor(private technicalService:TechnicalService,
    private clientService:ClientService,
    private orderService:OsService,
    private router:Router
    ){}

  ngOnInit(): void {
    this.listTechnicals();
    this.listClients();
  }

  create():void{
    this.createError = true;
    this.orderService.create(this.os).subscribe(res => {
      
      this.router.navigate(['os']);
      this.orderService.message("Order Service created with sucess");
     

    }, err => {
      this.createError = false;
      console.log(err);
    })
  }

  cancel():void{
    this.router.navigate(['os']); 
  }

  listTechnicals():void{
   this.technicalService.findAll().subscribe(res => this.technicals = res);
  }

  listClients():void{
    this.clientService.findAll().subscribe(res => this.clients = res);
  }

}
