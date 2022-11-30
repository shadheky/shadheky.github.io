import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent {

  client:Client ={
    id:'',
    name:'',
    cpf:'',
    cellphoneNumber:''
  };

  name = new FormControl('', [Validators.minLength(5)]);
  cpf = new FormControl("", [Validators.minLength(11)]);
  cellphoneNumber = new FormControl('', [Validators.minLength(16)])

  constructor(private service:ClientService,
      private router:Router
    ){};

    
    create(): void{ 
      this.service.create(this.client).subscribe(
        res => {
          this.router.navigate(['clients']);
          this.service.message("Client created with sucess")
        }, err =>{
          console.log(err) 
            if(err.error.error.match("This cpf is already in our database")){
              this.service.message("This cpf is already in our database")
            }
            else if(err.error.messages[0].message.match("número do registro de contribuinte")){
              this.service.message("This cpf is not valid")

            }

        });
    }
    
    cancel():void{
      this.router.navigate(['clients'])
    };



    errorValidName(){
      if(this.name.invalid){
        return "Name not valid(min five caracters)";
      } 
      return false;
    }

    errorValidCpf(){
      if(this.cpf.invalid){
        return "This cpf is not valid (min eleven caracters)";
      }
      return false;
    }
    
    errorValidCellphone(){
      if(this.cellphoneNumber.invalid){
        return "Cellphone pattern is (99) 9-9999-9999"
      }
      return false;
    }
}
