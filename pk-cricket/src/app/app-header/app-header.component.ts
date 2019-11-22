import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  @Input() showBack: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  displayHome() {
    this.router.navigateByUrl('/home');
  }
}
