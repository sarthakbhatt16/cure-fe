import { Component, OnInit } from '@angular/core';
import { User } from '../_model/user';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  tabsKeys: string[] = [];//store the keys of the opened tabs
  //tabsComponents: ITechTab[] = [];// stores information about the component in each tab
  selectedTab = 0; // store the index of the selected tab

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    this.loadAllUsers();
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; });
  }

  deleteUser(_id: string) {
    this.userService.delete(_id).subscribe(() => { this.loadAllUsers(); });
  }

}
