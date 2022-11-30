import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { OS } from 'src/app/models/Os';
import { Technical } from 'src/app/models/technical';
import { ClientService } from 'src/app/services/client.service';
import { OsService } from 'src/app/services/os.service';
import { TechnicalService } from 'src/app/services/technical.service';

@Component({
  selector: 'app-os-update',
  templateUrl: './os-update.component.html',
  styleUrls: ['./os-update.component.css']
})
export class OsUpdateComponent {

  os: OS = {
    technical: '',
    client: '',
    observations: '',
    status: '',
    priority: ''

  }



  technicals: Technical[] = [];
  clients: Client[] = [];

  createError = false;

  constructor(private router: Router,
    private service: OsService,
    private technicalService: TechnicalService,
    private clientService: ClientService,
    private route: ActivatedRoute
  ) { };



  ngOnInit(): void {


    this.listTechnicals();
    this.listClients();
    this.render();


  }


  render() {

    this.service.findById(this.route.snapshot.paramMap.get("id")).subscribe(res => {
      this.os = res;
      this.convertData();
    });

  }

  update(): void {
    this.createError = true;


    this.service.update(this.os).subscribe(res => {

      this.router.navigate(['os']);
      this.service.message("Order Service updated with sucess");


    }, err => {
      this.createError = false;
      console.log(err);
    })
  }

  cancel(): void {
    this.router.navigate(['os']);
  }

  listTechnicals(): void {
    this.technicalService.findAll().subscribe(res => this.technicals = res);
  }

  listClients(): void {
    this.clientService.findAll().subscribe(res => this.clients = res);
  }

  convertData(): void {
    if (this.os.status == "OPEN") {
      this.os.status = 0;
    }
    else if (this.os.status == "PROGRESS") {
      this.os.status = 1;
    }
    else {
      this.os.status = 2;
    }
    if (this.os.priority == "LOW") {
      this.os.priority = 0;
    }
    else if (this.os.priority == "MEAN") {
      this.os.priority = 1;
    }
    else {
      this.os.priority = 2;
    }

  }

}


