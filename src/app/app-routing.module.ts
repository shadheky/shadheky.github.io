import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/template/home/home.component';
import { TechnicalReadComponent } from './views/components/technical/technical-read/technical-read.component';
import { TechnicalCreateComponent } from './views/components/technical/technical-create/technical-create.component';
import { TechnicalUpdateComponent } from './views/components/technical/technical-update/technical-update.component';
import { TechnicalDeleteComponent } from './views/components/technical/technical-delete/technical-delete.component';
import { ClientReadComponent } from './views/components/client/client-read/client-read.component';
import { ClientCreateComponent } from './views/components/client/client-create/client-create.component';
import { ClientUpdateComponent } from './views/components/client/client-update/client-update.component';
import { ClientDeleteComponent } from './views/components/client/client-delete/client-delete.component';
import { OsReadComponent } from './views/components/os/os-read/os-read.component';
import { OsCreateComponent } from './views/components/os/os-create/os-create.component';
import { OsUpdateComponent } from './views/components/os/os-update/os-update.component';
import { OsViewComponent } from './views/components/os/os-view/os-view.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'technical',
    component: TechnicalReadComponent
  },
  {
    path: 'technical/create',
    component: TechnicalCreateComponent
  },
  {
    path: 'technical/update/:id',
    component: TechnicalUpdateComponent
  } ,
  {
    path: 'technical/delete/:id',
    component: TechnicalDeleteComponent
  },
  {
    path: 'clients',
    component: ClientReadComponent
  },
  {
    path: 'clients/create',
    component: ClientCreateComponent
  },
  {
    path: 'clients/update/:id',
    component: ClientUpdateComponent
  },
  {
    path: 'clients/delete/:id',
    component: ClientDeleteComponent
  },
  {
    path: 'os',
    component: OsReadComponent
  },
  {
    path: 'os/create',
    component: OsCreateComponent
  }
  ,
  {
    path: 'os/update/:id',
    component: OsUpdateComponent
  },
  {
    path: 'os/view/:id',
    component: OsViewComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
