import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderandfooterComponent } from './headerandfooter/headerandfooter.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignupPopupComponent } from './signup-popup/signup-popup.component';
import { CarOverviewComponent } from './car-overview/car-overview.component';
const routes: Routes = [
  {path:'headandfoot',component:HeaderandfooterComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'signup/pop',component:SignupPopupComponent},
  {path:'car-overview',component:CarOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
