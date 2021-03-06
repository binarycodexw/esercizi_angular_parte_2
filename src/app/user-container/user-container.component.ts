import { Component, OnInit } from '@angular/core';
import { Gender, Profile, Role } from '../models/model';


@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  user?: Profile;

  users: Profile[] = [
    {
        id: 3487,
        name: 'Mario',
        surname: 'Rossi',
        age: 25,
        dateOfBirth: '1995-14-12',
        address: {
          city: 'Roma',
          street: 'Via roma 10',
          postalCode: '00100'
        },
        role: Role.STAFF,
        username: 'MarioRossi80',
        profilePhotoUrl: 'https://bit.ly/3yRngEP',
        gender: Gender.MALE
      },
      {
        id: 12312,
        name: 'Maria',
        surname: 'Rossa',
        age: 26,
        dateOfBirth: '1994-10-11',
        address: {
          city: 'Palermo',
          street: 'Via Palermo 10',
          postalCode: '90100'
        },
        role: Role.MANAGER,
        username: 'MariaRossa94',
        profilePhotoUrl: 'https://bit.ly/3DWWxuj',
        gender: Gender.FEMALE
      },
      {
        id: 45645,
        name: 'Elis',
        surname: 'Miao',
        age: 5,
        dateOfBirth: '2016-05-08',
        address: {
          city: 'Palermo',
          street: 'Via Palermo 120',
          postalCode: '90100'
        },
        role: Role.ADMIN,
        username: 'ElisMiao',
        profilePhotoUrl: 'https://bit.ly/3zU6iH3',
        gender: Gender.FEMALE
      }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selection(user: Profile){
    this.user = user;
  }
  
  closeDetails(){
    this.user = undefined;
  }
  
  deleteUser(user: Profile){
    let list = this.users.indexOf(user);
    this.users.splice(list, 1);
  }
}
