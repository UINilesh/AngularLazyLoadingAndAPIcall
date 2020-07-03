import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { FilterPipe } from '../pipe/search';
 

@NgModule({
  declarations: [ProfileComponent,FilterPipe],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule
    
  ]
})
export class ProfileModule { }
