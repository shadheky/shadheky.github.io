import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OS } from 'src/app/models/Os';
import { ClientService } from 'src/app/services/client.service';
import { OsService } from 'src/app/services/os.service';
import { TechnicalService } from 'src/app/services/technical.service';

@Component({
  selector: 'app-os-read',
  templateUrl: './os-read.component.html',
  styleUrls: ['./os-read.component.css']
})
export class OsReadComponent implements AfterViewInit {
  oss:OS [] = [];
 
  displayedColumns: string[] = ['technical', 'client','open', 'closed', 'priority', 'status', 'action'];
  dataSource = new MatTableDataSource<OS>(this.oss);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service : OsService,
    private router : Router,
    private technicalService:TechnicalService,
    private clientService:ClientService
    ){};

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.findAll();
  }


  findAll():void{
    this.service.findAll().subscribe(x => {
      this.oss = x
      });

    this.listTechnicals();
    this.listClients();
    this.dataSource = new MatTableDataSource<OS>(this.oss);
    this.dataSource.paginator = this.paginator;
    
  }

  navigateToCreate():void{
    this.router.navigate(['os/create']);
  }


  listTechnicals(){
    this.oss.forEach( x => {
      this.technicalService.findById(x.technical).subscribe(res => x.technical = res.name)
    })
  }

  listClients(){
    this.oss.forEach( x => {
      this.clientService.findById(x.client).subscribe(res => x.client = res.name)
    })
  }

  priority(x : any){
    if( x == "LOW"){
      return "low";
    }
    else if(x == "MEAN"){
      return "mean";
    }
    return "high";

  }

}