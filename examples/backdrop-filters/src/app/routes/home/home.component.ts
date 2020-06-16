import {
  Component,
  OnInit
} from '@angular/core';

import {
  PeopleService,
  ThemeService
} from '../../services';

@Component({
  selector: 'home-route',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(
    public peopleSvc: PeopleService,
    public themer: ThemeService
  ) { }

  ngOnInit() {
    this.peopleSvc.getPeople();
  }
}
