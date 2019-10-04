import { Component,OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';
import { User } from './models/user.model';
import { Mentor } from './models/mentor.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({length: 8}, (_, i) => `Nav Item ${i + 1}`);
  title = 'Mentor On Demand';
  isCollapsed: boolean = true;
  side: any;
  whoLoggedIn: User | Mentor;
  isLoggedIn: boolean;
  isUserLoggedIn: boolean = false;
  isMentorLoggedIn: boolean = false;
  isAdminLoggedIn: boolean = false;

  private _mobileQueryListener: () => void;

  ngOnInit() {
    this.whoLoggedIn = JSON.parse(sessionStorage.getItem('whoLoggedIn'));
    if(this.whoLoggedIn==null)
      this.isLoggedIn = true;
    if(this.whoLoggedIn.role==="User")
      this.isUserLoggedIn = true;
    if(this.whoLoggedIn.role==="Admin")
      this.isAdminLoggedIn = true;
    if(this.whoLoggedIn.role==="Mentor")
      this.isMentorLoggedIn = true;
  }

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
