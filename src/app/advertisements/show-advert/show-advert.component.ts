import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-advert',
  templateUrl: './show-advert.component.html',
  styleUrls: ['./show-advert.component.css']
})
export class ShowAdvertComponent implements OnInit {

  constructor(private service: SharedService) { }
  ModalTitle: string="";
  ActivateAddAdvertComp: boolean=false;
  advert: any; 
  AdvertList:any=[];
  page=1;

  ngOnInit(): void {
    this.refreshAdvertList();
  }


  addClick(){
    this.advert={
      Id:0,
      Name:"",
      Price:0,
      Description:""
    }
    this.ModalTitle="Add Advert";
    this.ActivateAddAdvertComp=true;
  }

  closeClick(){
    this.ActivateAddAdvertComp=false;
    this.refreshAdvertList();
  }

  refreshAdvertList(){
    this.service.getAdvertList().subscribe(data=>
      {
        this.AdvertList=data;
      })
  }

  handlePageChange(event: any) {
    this.page = event;
  }

}
