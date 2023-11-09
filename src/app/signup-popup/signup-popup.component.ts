import { Component, Inject, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup-popup',
  templateUrl: './signup-popup.component.html',
  styleUrls: ['./signup-popup.component.scss']
})
export class SignupPopupComponent {
  @Input()
  heading!: string;
  otp: string[] = ['', '', '', '', '', ''];
  showPhoneNumberSection: boolean = true;
  countdown: number = 200;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<SignupPopupComponent>,private fb: FormBuilder) {
    this.heading = data.heading;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onOtpChange() {
    // Handle OTP input changes here
    // For example, you can check if the OTP is valid and then proceed accordingly.
  }

  startCountdown() {
    // Start the countdown timer
    const interval = setInterval(() => {
      if (this.countdown === 0) {
        clearInterval(interval);
        // Handle timeout, e.g., show a resend OTP button
      } else {
        this.countdown--;
      }
    }, 1000); // Countdown every 1 second
  }

  ngOnInit() {
    // Start the countdown when the component initializes
    this.startCountdown();
  }
  onGetOtpClick() {
    // Handle the "Get OTP" button click
    // Toggle the visibility of the sections
    this.showPhoneNumberSection = !this.showPhoneNumberSection;
  }
}
