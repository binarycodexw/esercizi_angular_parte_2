import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Profile } from '../models/model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() userDetails?: Profile;
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
