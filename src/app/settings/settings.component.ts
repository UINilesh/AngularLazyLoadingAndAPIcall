import { Component, OnInit } from '@angular/core';
import { Albums } from '../classes/albums';
import { TodoList } from '../classes/todoclass';
import { freeApiService } from '../todo.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  tododata: TodoList[];
  filteredLength: any;

  constructor(private _freeApiService: freeApiService) {}

  ngOnInit() {
    this._freeApiService.gettodoList().subscribe((data) => {
      this.tododata = data;
      console.log(this.tododata);
      this.filteredLength = data.length;
    });
  }
}
