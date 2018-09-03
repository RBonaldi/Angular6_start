import { NgModule } from '@angular/core';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';

import {
  MatButtonModule, MatCardModule, MatSnackBarModule,
  MatCheckboxModule,
  MatIconModule, MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatCardModule, MatSnackBarModule,
    MatCheckboxModule,
    MatIconModule, MatInputModule],
  exports: [
    MatButtonModule,
    MatCheckboxModule, MatCardModule, MatSnackBarModule,
    MatIconModule, MatInputModule],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {
        duration: 3000,
        horizontalPosition: 'end',
        verticalPosition: 'top'
      }
    }
  ]
})

export class MaterialModule { }
