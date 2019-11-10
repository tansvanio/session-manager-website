import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from "@angular/material";
import { LoginComponent} from "./login.component";
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule,MatFormFieldModule,MatCardModule,MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatGridListModule,MatInputModule,MatFormFieldModule,MatCardModule,MatButtonModule
  ]
})
export class LoginModule { }
