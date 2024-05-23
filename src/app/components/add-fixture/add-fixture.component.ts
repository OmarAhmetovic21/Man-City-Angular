import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';
import { FixturesService } from 'app/services/fixtures-service/fixtures.service';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-fixture.component.html',
  styleUrls: ['./add-fixture.component.scss']
})
export class AddFixtureComponent implements OnInit {

  @Input() data: any;
  HomeTeam: any;
  AwayTeam: any;
  Date: any;
  Time: any;
  //media: any;
  id: any;


  constructor(public activeModal: NgbActiveModal,
              private FixturesService: FixturesService) { }

  ngOnInit(): void {
    if(this.data){
      this.HomeTeam = this.data.name;
      this.AwayTeam= this.data.AwayTeam;
      this.Date= this.data.Date;
      this.Time= this.data.Time;
      this.id= this.data.id;
    }

  }

  /*onChange = ($event: Event)=>{
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    console.log(file);

    this.convertToBase64(file);

  }

  convertToBase64(file: File){
    const observable = new Observable((subscriber: Subscriber<any>)=>{
      this.readFile(file, subscriber)
    })
    observable.subscribe((d)=>{
      console.log(d)
      this.media = d;

    }
    )
  }

  readFile(file: File, subscriber: Subscriber<any>){
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = () =>{
      subscriber.next(filereader.result)
      subscriber.complete()
    }

    filereader.onerror = () => {
      subscriber.error()
      subscriber.complete()
    }

  }
*/
  closeModal() {
    this.activeModal.close();
  }

  postOffers() {
    let data = {
      HomeTeam: this.HomeTeam,
      AwayTeam: this.AwayTeam,
      Date: this.Date,
      Time: this.Time,
      //media: this.media
    }
    

    this.activeModal.close(data);
  }

  editOffer(){
    let post = {
      HomeTeam: this.HomeTeam,
      AwayTeam: this.AwayTeam,
      Date: this.Date,
      Time: this.Time,
      //media: this.media,
      id: this.data.id
    }  

    this.activeModal.close(post);

  }



}
