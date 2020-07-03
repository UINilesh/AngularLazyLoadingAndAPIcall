/* tslint:disable:no-unused-variable */
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { FilterPipe } from './search';
import { ProfileComponent } from '../profile/profile.component';
  
describe('Directive: filter search method', () => {

    let component: ProfileComponent;
    let fixture: ComponentFixture<ProfileComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ProfileComponent, FilterPipe]
        });
        fixture = TestBed.createComponent(ProfileComponent);
        component = fixture.componentInstance;
    });

  
});