import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import * as Rellax from 'rellax';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ModalService } from 'app/services/modal-service/modal.service';
import { FixturesService } from 'app/services/fixtures-service/fixtures.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
isDesktopDevice: any;
getFixturesObservable: BehaviorSubject<any[]>;
objectData: any;
  constructor(private deviceService: DeviceDetectorService, 
    private router: Router,
    private modalService: ModalService,
    private FixtureService: FixturesService) { 
      this.getFixturesObservable = new BehaviorSubject<any[]>([]);
    }

    ngOnInit() {

      this.isDesktopDevice = this.deviceService.isDesktop();
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('login-page');

      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.add('navbar-transparent');
      this.getFixtures();
  }
  ngOnDestroy(){
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('login-page');

      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
  }

  open(page: any) {
    this.router.navigateByUrl('/' + page);
}

deleteFixtures(id: any) {
  if(confirm("Are you sure you want to delete this offer")) {
    console.log("Implement delete functionality here");
    this.FixtureService.deleteFixtures(id).subscribe((data: any) => {
      this.getFixtures();
    });
  }
  

}

getFixtures() {
  this.FixtureService.getFixtures().subscribe((data: any) => {
    // resp.json().data
    this.getFixturesObservable.next(data);
    console.log(data);
  })
}

openAddEditFixtures(data: any){

  this.modalService.openAddFixture(data).then((data) => {
   if(data.id) {
     let post = {
       name: data.name,
       price: data.price,
       amount: data.amount,
       media: data.media,
     }
     this.FixtureService.editFixtures(post, data.id).subscribe((data: any)=> {
       console.log("Successfully updated offer");
       this.getFixtures();
     } );
    
   }
   
 })
 .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

   }

   openAddFixtureModal(){
    this.modalService.openAddFixtureModal().then((data) => {

      this.FixtureService.postFixtures(data).subscribe((data: any)=> {
        console.log("Successfully added offer");
        this.getFixtures();
      } );

  })
  .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
 
   }



}
