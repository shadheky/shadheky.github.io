import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Technical } from 'src/app/models/technical';
import { TechnicalService } from 'src/app/services/technical.service';

@Component({
  selector: 'app-technical-create',
  templateUrl: './technical-create.component.html',
  styleUrls: ['./technical-create.component.css']
})
export class TechnicalCreateComponent {

  technical: Technical = {
    id: '',
    name: '',
    cpf: '',
    cellphoneNumber: ""
  }

  name = new FormControl('', [Validators.minLength(5)])
  cpf = new FormControl('', [Validators.minLength(11)])
  cellphoneNumber = new FormControl('', [Validators.minLength(16)])


  constructor(private router: Router,
    private service: TechnicalService
  ) { }


  cancel(): void {
    this.router.navigate(["/technical"]);
  }

  create(): void {
       this.service.create(this.technical).subscribe((response) => {
        this.router.navigate(["/technical"]);
        this.service.message("Successfully persisted technician");

    }, err => {
        
      if (err.error.error.match('This cpf is already in our database')) {
        this.service.message("This cpf is already in our database")
        
      } 
      else if(err.error.messages[0].message.match("This cpf is not valid")){
        this.service.message("This cpf is not valid");
        console.log(err);
      }

    })
  }
 
  errorValidName(){
    if(this.name.invalid){
      return "Name not valid (Min five caracters)";
    }
    return false;
  }

  errorValidCpf(){
    if(this.cpf.invalid){
      return "Invalid cpf (Min eleven caracters)";
    }
    return false;
  }
  errorValidCellphone(){
    if(this.cellphoneNumber.invalid){
      return "Cellphone not valid ";
    }
    return false;
  }


}
