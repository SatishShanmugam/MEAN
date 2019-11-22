import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Route, Router } from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  details: any;
  searchTerm: string;
  parentMessage = false;
  parentSearch = true;
  constructor( private router: Router) { }

  receiveMessage($event) {
    this.details = $event;
  }
  receiveSearchMessage($event) {
    this.searchTerm = $event;
  }
  ngOnInit() {

  }

  setClickedRow( userData: any) {

    const navigationExtras: NavigationExtras = {
      state: {
        id: userData._id,
        player: userData.name,
        position: userData.position,
        rating: userData.rating
      }
    };
    this.router.navigateByUrl('/detail', navigationExtras);
  }
}
