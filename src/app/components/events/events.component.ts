import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';
import { FixturesService } from 'app/services/fixtures-service/fixtures.service';
import { DomSanitizer } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  isDesktopDevice: any;
  getFixturesObservable: BehaviorSubject<any[]>;

  constructor(private deviceService: DeviceDetectorService,
              private router: Router,
              private fixturesService: FixturesService,
  ) 
  { 
    this.getFixturesObservable = new BehaviorSubject<any[]>([]);
  }

  ngOnInit(): void {
    this.isDesktopDevice = this.deviceService.isDesktop();

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
        this.getFixtures();
  }


open(page: any) {
  this.router.navigateByUrl('/' + page);
}

getFixtures() {
  this.fixturesService.getFixtures().subscribe((data: any) => {
    // resp.json().data
    this.getFixturesObservable.next(data);
    console.log(data);
  })
}


}
