import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../api.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  providers: [ FilterPipe ]
})
export class NavigationBarComponent implements OnInit {
    details: any;
    subscription: any;
    @Input() showSearch: boolean;
    @Output() messageEvent = new EventEmitter<any>();
    @Output() searchMsgEvent = new EventEmitter<any>();
    @Output() messageSecondPageEvent = new EventEmitter<any>();

  constructor(private router: Router, private apiService: ApiService, private filteration: FilterPipe ) { }

  ngOnInit() {
    this.subscription = this.apiService.getDetails().subscribe((data) => {
      this.details = data;
      console.log(data);
      this.messageEvent.emit(this.details);
      });
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  search(event: any) {
    this.searchMsgEvent.emit(event.srcElement.value);
  }
  displayDetails(playerName: any) {
      let userData: any;
      userData =  this.filteration.transform(this.details, playerName)[0];
      if (this.router.url === '/home') {
      const navigationExtra: NavigationExtras = {
        state: {
          id : userData._id,
          player: userData.name,
          position: userData.position,
          rating: userData.rating
        }
      };
      this.router.navigateByUrl('/detail', navigationExtra);
    } else {
      const navigationExtras: NavigationExtras = {
        state: {
          ids : userData._id,
          players: userData.name,
          positions: userData.position,
          ratings: userData.rating
        }
      };
      this.messageSecondPageEvent.emit(navigationExtras);
    }

  }

}
