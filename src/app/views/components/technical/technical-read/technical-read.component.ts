import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Technical } from 'src/app/models/technical';
import { TechnicalService } from 'src/app/services/technical.service';

@Component({
  selector: 'app-technical-read',
  templateUrl: './technical-read.component.html',
  styleUrls: ['./technical-read.component.css']
})
export class TechnicalReadComponent implements AfterViewInit {
  technicals:Technical [] = [];
 
  displayedColumns: string[] = ['id', 'name', 'cpf', 'cellphone number', 'action'];
  dataSource = new MatTableDataSource<Technical>(this.technicals);
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service : TechnicalService,
    private router : Router
    ){};

  ngAfterViewInit() {
    this.findAll();
  }


  findAll():void{
    this.service.findAll().subscribe((x) => {
      this.technicals = x;
      this.dataSource = new MatTableDataSource<Technical>(this.technicals);
      this.dataSource.paginator = this.paginator;

    })

    
  }

  navigateToCreate():void{
    this.router.navigate(['technical/create']);
  }

}

