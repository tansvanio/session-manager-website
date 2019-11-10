import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule,MatFormFieldModule,MatCardModule,MatButtonModule} from '@angular/material';

import { RegisterComponent } from './register.component';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { 


}
