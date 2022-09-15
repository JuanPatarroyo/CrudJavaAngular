import { FormComponent } from './form/form.component';
import { PeopleComponent } from './people/people.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: PeopleComponent},
  {path: 'people', component: PeopleComponent, children: [
    {path: 'add', component: FormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
