import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupPopupComponent } from '../signup-popup/signup-popup.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  sidebarWidth: string = '0';
  showEssentialsDropdown: boolean = false;
  showBedroomDropdown:boolean=false;
  showFoodDropdown:boolean=false;
  showLaundryDropdown:boolean=false;
  showFashionDropdown:boolean=false;
  constructor(
    public dialog: MatDialog,
   ) {
  
   }
   isDropdownOpen = false; 
openNav() {
  this.sidebarWidth = '250px';
}

closeNav() {
  this.sidebarWidth = '0';
    this.showEssentialsDropdown = false;

}
toggleEssentialsDropdown() {
  this.showEssentialsDropdown = !this.showEssentialsDropdown;
}
toggleBedroomDropdown() {
  this.showBedroomDropdown = !this.showBedroomDropdown;
}
toggleFoodDropdown(){
  this.showFoodDropdown=!this.showFoodDropdown;
}
toggleLaundryDropdown(){
  this.showLaundryDropdown=!this.showLaundryDropdown;
}
toggleFashionDropdown(){
  this.showFashionDropdown=!this.showFashionDropdown;
}

openQuickViewDialog(headingType: 'Dealer' | 'Customer'): void {
  let headingText: string = ''; // Initialize with an empty string

  if (headingType === 'Dealer') {
    headingText = 'Dealer'; // Set the first heading when Dealer button is clicked
  } else if (headingType === 'Customer') {
    headingText = 'Customer'; // Set the second heading when Customer button is clicked
  }

  const dialogRef = this.dialog.open(SignupPopupComponent, {
    data: {
      heading: headingText
    },
    height: '500px',
    width: '900px',
    autoFocus: false,
    panelClass: 'custom-dialog-content'
  });
 
}
}
