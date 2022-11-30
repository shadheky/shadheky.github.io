import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent {

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private service:ClientService
  ){};

   client:Client = {
    id:'',
    name:'',
    cpf:"",
    cellphoneNumber:''
   }
  
   name = new FormControl({value: '', disabled: true}, [Validators.minLength(5)]);
   cpf = new FormControl({value: '', disabled: true}, [Validators.minLength(11)]);
   cellphoneNumber = new FormControl({value: '', disabled: true}, [Validators.minLength(16)])

  ngOnInit(){
    this.render();
  }   

   delete():void{
    this.service.delete(this.client).subscribe(
      res => {
        this.router.navigate(['clients']);
        this.service.message("Client delete with sucess")
      }, err => {
        if(err.error.error.match('This client has orders services, cannot delete')){
          this.service.message("This client has orders services, cannot delete")
        }
      }
    );
  }
   
   cancel(){
    this.router.navigate(["clients"]);
   }

   render():void{
    this.service.findById(this.route.snapshot.paramMap.get('id')).subscribe(res =>{
      this.client = res;
    })

   }

   errorValidName(){
    if(this.name.invalid){
      return "Name invalid (min five caracters)"
    }
    return false
   }

   errorValidCpf(){
    if(this.cpf.invalid){
      return "Cpf invalid (min eleven caracters)";
    }
    return false;
   }

   errorValidCellphone(){
    if(this.cellphoneNumber.invalid){
      return "Cellphone invalid (pattern is (99) 9-9999-9999)"
    }
    return false;
   }

   





}
