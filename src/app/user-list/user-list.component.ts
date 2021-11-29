import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { Profile } from '../models/model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() users!: Profile[];
  @Output() detailsClick = new EventEmitter<Profile>();
  @Output() deleteClick = new EventEmitter<Profile>();

  constructor() { }

  ngOnInit(): void {
  }

}
