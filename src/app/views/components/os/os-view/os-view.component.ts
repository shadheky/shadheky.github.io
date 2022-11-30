import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { OS } from 'src/app/models/Os';
import { OsService } from 'src/app/services/os.service';

@Component({
  selector: 'app-os-view',
  templateUrl: './os-view.component.html',
  styleUrls: ['./os-view.component.css']
})
export class OsViewComponent {

  os : OS = {
    technical:'',
    client:'',
    observations:'',
    status:'',
    priority:''

  }

  constructor(private route: ActivatedRoute,
    private service:OsService,
    private router:Router
    ){};

    ngOnInit(){
      this.os.id = this.route.snapshot.paramMap.get('id');
      this.renderObservations();
    }
    
    renderObservations(){
      this.service.findById(this.os.id).subscribe(res => this.os = res);
    }

    cancel(){
      this.router.navigate(['os']);
    }

}
