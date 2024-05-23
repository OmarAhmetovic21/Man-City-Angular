import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import * as Rellax from 'rellax';
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
  constructor(private deviceService: DeviceDetectorService, 
    private router: Router,
    private modalService: ModalService,
    private FixtureService: FixturesService) { }

    ngOnInit() {
      this.isDesktopDevice = this.deviceService.isDesktop();
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('login-page');

      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.add('navbar-transparent');
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

openAddEditFixture(/*data: any*/){

  this.modalService.openAddFixture(/*data*/).then((/*data*/) => {
    /*
   if(data.id) {
     let post = {
       name: data.name,
       price: data.price,
       amount: data.amount,
       media: data.media,
     }
     this.FixtureService.editOffer(post, data.id).subscribe((data: any)=> {
       console.log("Successfully updated offer");
       this.getOffers();
     } );
    
   } else {
     this.FixtureService.postOffers(data).subscribe((data: any)=> {
       console.log("Successfully added offer");
       this.getOffers();
     } );
   }*/
   
 })
 .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

   }

}
