import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDivisionComponent } from './components/main-division/main-division.component';

const routes: Routes = [
  {path:'maindivision', component: MainDivisionComponent},
  {path:'', component:MainDivisionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
