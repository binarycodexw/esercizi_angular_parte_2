import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Profile } from '../models/model';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {

  @Input() user!: Profile;
  @Output() detailsClick = new EventEmitter<Profile>();
  @Output() deleteClick = new EventEmitter<Profile>();

  constructor() { }

  ngOnInit(): void {
  }

}
