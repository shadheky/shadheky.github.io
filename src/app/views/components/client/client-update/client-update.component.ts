import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent {

  constructor(private router:Router,
      private service:ClientService,
      private route:ActivatedRoute
    ){ };

    client : Client = {
      id: '',
      name: '',
      cpf: '',
      cellphoneNumber: ''
    };

    name = new FormControl('', [Validators.minLength(5)]);
    cpf = new FormControl('', [Validators.minLength(11)]);
    cellphoneNumber = new FormControl('', [Validators.minLength(16)]);

    ngOnInit(){
      this.render();
    }

    update():void{
      this.service.update(this.client).subscribe(res =>{
        this.router.navigate(["clients"]);
        this.service.message("Client update with sucess");
      }, err => {
        console.log(err)
        if(err.error.error.match("This cpf is already in our database")){
          this.service.message("This cpf is already in our database");
        }
        else if(err.error.messages[0].message.match("número do registro de contribuinte")){
          this.service.message("This cpf is not valid")
        }
      })
    }

    cancel():void{
      this.router.navigate(['clients']);
    }

    render():void{
      this.service.findById(this.route.snapshot.paramMap.get('id')).subscribe(res =>{
        this.client = res;
      });
    }

    errorValidName(){
      if(this.name.invalid){
        return "Name invalid (min five caracters)"
      }
      return false;
    }

    errorValidCpf(){
      if(this.cpf.invalid){
        return "Cpf invalid (min eleven caracters)"
      }
      return false;
    }

    errorValidCellphone(){
      if(this.cellphoneNumber.invalid){
        return "Cellphone not valid (pattern is  (99) 9-9999-9999)"
      }
      return false;
    }

}
