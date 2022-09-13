import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuerpoDosComponent } from './Components/cuerpo-dos/cuerpo-dos.component';
import { CuerpoComponent } from './Components/cuerpo/cuerpo.component';

const routes: Routes = [
  { path: 'cuerpo', component: CuerpoComponent },
  { path: 'cuerpo-dos', component: CuerpoDosComponent},
  { path: '**', component:CuerpoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
