import { Component, OnInit, Input } from '@angular/core';
 
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  bodyText: string;
  searchData:any;
  searchDatasection:any;
  @Input() name: string = "Hello There";
  
  constructor() { }

  ngOnInit(): void {
    this.bodyText = 'This text can be updated in modal 1';
  }

  projects:any = [ "PHP", "Java", "CSS", "HTML", "Angular", "API", "SQL", "SASS", "Wordpress"];


}
