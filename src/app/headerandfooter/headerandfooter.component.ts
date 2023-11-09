import { Component } from '@angular/core';
import { SignupPopupComponent } from '../signup-popup/signup-popup.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-headerandfooter',
  templateUrl: './headerandfooter.component.html',
  styleUrls: ['./headerandfooter.component.scss']
})
export class HeaderandfooterComponent {

  constructor(
   public dialog: MatDialog,
  ) {
    document.addEventListener('click', (event) => this.onDocumentClick(event));
  }
  isDropdownOpen = false; 

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen; 
  }
  onDocumentClick(event: MouseEvent): void {
    if (!event.target) {
      this.isDropdownOpen = false;
    }
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
      height: 'auto',
      width: '800px',
      autoFocus: false,
      
    });
   
  }
}
