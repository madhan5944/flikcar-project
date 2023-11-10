import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-nav',
  templateUrl: './filter-nav.component.html',
  styleUrls: ['./filter-nav.component.scss']
})
export class FilterNavComponent {
  showLocationDropdown:boolean=false;
  showModelYearDropdown:boolean=false;
  showKmDropdown:boolean=false;
  showBudgetDropdown:boolean=false;
  showFuelDropdown:boolean=false;
  showModelDropdown:boolean=false;
  showBodyDropdown:boolean=false;
  showSeatingDropdown:boolean=false;
  showOwnerDropdown:boolean=false;
  showTransmissionDropdown:boolean=false;
  
      toggleLocationDropdown(){
        this.showLocationDropdown = !this.showLocationDropdown;
      }
      toggleModelYearDropdown() {
        this.showModelYearDropdown=!this.showModelYearDropdown;
      }
      toggleKmDropdown() {
        this.showKmDropdown=!this.showKmDropdown;
      }
      toggleBudgetDropdown() {
        this.showBudgetDropdown=!this.showBudgetDropdown;
      }
      toggleFuelDropdown() {
        this.showFuelDropdown=!this.showFuelDropdown;
      }
    
      toggleModelDropdown() {
        this.showModelDropdown=!this.showModelDropdown;
      }
      toggleBodyDropdown() {
        this.showBodyDropdown=!this.showBodyDropdown;
      }
      toggleSeatingDropdown() {
        this.showSeatingDropdown=!this.showSeatingDropdown;
      }
      toggleOwnerDropdown() {
        this.showOwnerDropdown=!this.showOwnerDropdown;
      }
      toggleTransmissionDropdown() {
        this.showTransmissionDropdown=!this.showTransmissionDropdown;
      }
// search location

// slider
startYear: number = 2000;
endYear: number = 2023;
selectedYear: number = this.startYear;
startKm:number =0;
endKm:number=80000;
selectedKm:number=this.startKm;
startBudget:number=0;
endBudget:number=10000000;
selectedBudget:number=this.startBudget


updateYearDisplay(): void {
  const slider = document.getElementById("yearSlider") as HTMLInputElement;
  this.selectedYear = +slider.value;
}
updateKmDisplay(): void {
  const slider = document.getElementById("kmSlider") as HTMLInputElement;
  this.selectedKm = +slider.value;
}
updateBudgetDisplay(): void {
  const slider = document.getElementById("budgetSlider") as HTMLInputElement;
  this.selectedBudget = +slider.value;
}

}
