import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './feature/not-found/not-found.component';
import {HomeComponent} from "./feature/home/home.component";


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'results',
    loadChildren:() => import('./feature/feature.module').then(m => m.FeatureModule)
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
