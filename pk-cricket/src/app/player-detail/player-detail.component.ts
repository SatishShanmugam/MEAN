import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss'],
})
export class PlayerDetailComponent implements OnInit {

  details: any;
  singleDetail: any;
  subscription: any;
  public id: any;
  public player: any ;
  public position: any;
  public rating: any;
  parentMessage = true;
  parentSearch = false;

  receiveSecondPageMessage($event) {
    const navigation = $event;
    const states = navigation.state as {
      ids: any,
      players: any,
      positions: any,
      ratings: any
    };
    this.id = states.ids;
    this.player = states.players;
    this.position = states.positions;
    this.rating = states.ratings;

    this.apiService.getOnePlayerDetails(this.id).subscribe((data) => {
      this.details = data;
      });
  }
  constructor(private apiService: ApiService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      id: any,
      player: any,
      position: any,
      rating: any
    };
    this.id = state.id;
    this.player = state.player;
    this.position = state.position;
    this.rating = state.rating;
    console.log(this.id);

   }

  ngOnInit() {
    this.subscription = this.apiService.getOnePlayerDetails(this.id).subscribe((data) => {
      this.details = data;
      this.singleDetail = data;
      });
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
