import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderandfooterComponent } from './headerandfooter/headerandfooter.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignupPopupComponent } from './signup-popup/signup-popup.component';
import { CarOverviewComponent } from './car-overview/car-overview.component';
import { FilterNavComponent } from './filter-nav/filter-nav.component';
const routes: Routes = [
  {path:'headandfoot',component:HeaderandfooterComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'signup/pop',component:SignupPopupComponent},
  {path:'car-overview',component:CarOverviewComponent},
  {path:'filter',component:FilterNavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
