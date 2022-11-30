import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Technical } from 'src/app/models/technical';
import { TechnicalService } from 'src/app/services/technical.service';

@Component({
  selector: 'app-technical-update',
  templateUrl: './technical-update.component.html',
  styleUrls: ['./technical-update.component.css']
})
export class TechnicalUpdateComponent {
  technical: Technical = {
    id: '',
    name: '',
    cpf: '',
    cellphoneNumber: ""
  }

  id_tec = '';

  name = new FormControl('', [Validators.minLength(5)])
  cpf = new FormControl('', [Validators.minLength(11)])
  cellphoneNumber = new FormControl('', [Validators.minLength(16)])


  constructor(private router: Router,
    private service: TechnicalService,
    private route : ActivatedRoute,
  ) { }

    ngOnInit():void{
      this.id_tec = this.route.snapshot.paramMap.get("id")!;
      this.render();
    }
    
    update():void{
        this.service.update(this.technical).subscribe(res =>{
          this.router.navigate(["/technical"]);
          this.service.message("Technician successfully updated")

        }, err => {
          if (err.error.error.match('This cpf is already in our database')) {
            this.service.message("This cpf is already in our database")
            
          } 
          else if(err.error.messages[0].message.match("This cpf is not valid")){
            this.service.message("This cpf is not valid");
            console.log(err);
          }
    
        });

    }

    render():void{
      this.service.findById(this.id_tec).subscribe(res => {
        this.technical = res;
      });
    }

  cancel(): void {
    this.router.navigate(["/technical"]);
  }

  errorValidName() {
    if (this.name.invalid) {
      return "Name not valid (Min five caracters)";
    }
    return false;
  }

  errorValidCpf() {
    if (this.cpf.invalid) {
      return "Invalid cpf (Min eleven caracters)";
    }
    return false;
  }
  errorValidCellphone() {
    if (this.cellphoneNumber.invalid) {
      return "Cellphone not valid ";
    }
    return false;
  }


}
