import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddFixtureComponent } from 'app/components/add-fixture/add-fixture.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  public openAddFixture(/*data: any*/){
    const modalRef = this.modalService.open(AddFixtureComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
      });
      /*modalRef.componentInstance.data = data;*/
      return modalRef.result;
  }
}
