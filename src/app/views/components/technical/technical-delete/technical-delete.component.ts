import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Technical } from 'src/app/models/technical';
import { TechnicalService } from 'src/app/services/technical.service';

@Component({
  selector: 'app-technical-delete',
  templateUrl: './technical-delete.component.html',
  styleUrls: ['./technical-delete.component.css']
})
export class TechnicalDeleteComponent {
  technical: Technical = {
    id: '',
    name: '',
    cpf: '',
    cellphoneNumber: ""
  }

  id_tec ='';

  
  name = new FormControl({value: '', disabled: true}, [Validators.minLength(11)])
  cpf = new FormControl({value: '', disabled: true}, [Validators.minLength(11)])
  cellphoneNumber = new FormControl({value: '', disabled: true}, [Validators.minLength(16)])


  constructor(private router: Router,
    private service: TechnicalService,
    private route:ActivatedRoute
  ) { }

  ngOnInit():void{
    this.id_tec = this.route.snapshot.paramMap.get("id")!;
    this.render();
  }

  cancel(): void {
    this.router.navigate(["/technical"]);
  }

  delete():void{
    this.service.delete(this.technical).subscribe(res => {
      this.router.navigate(['/technical']);
      this.service.message("Technical delete with sucess");
    }, err =>{
        if(err.error.error === "This tehcnical has orders services, cannot delete"){
          this.service.message("This tehcnical has orders services, cannot delete");
        }
    });
  }

  render():void{
    this.service.findById(this.id_tec).subscribe(res => {
      this.technical = res;
    });
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
