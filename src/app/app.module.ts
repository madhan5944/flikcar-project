import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderandfooterComponent } from './headerandfooter/headerandfooter.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignupPopupComponent } from './signup-popup/signup-popup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedService } from './share.service';
import { FormsModule } from '@angular/forms';
import { CarOverviewComponent } from './car-overview/car-overview.component';
import { FilterNavComponent } from './filter-nav/filter-nav.component';
import {MatSliderModule} from '@angular/material/slider';
@NgModule({
  declarations: [
    AppComponent,
    HeaderandfooterComponent,
    SidebarComponent,
    SignupPopupComponent,
    CarOverviewComponent,
    FilterNavComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule
    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
