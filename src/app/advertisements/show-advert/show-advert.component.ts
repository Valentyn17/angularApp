import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-advert',
  templateUrl: './show-advert.component.html',
  styleUrls: ['./show-advert.component.css']
})
export class ShowAdvertComponent implements OnInit {

  constructor(private service: SharedService) { }
  currentAdvertisement: any = {};
  currentIndex = -1;
  ModalTitle: string="";
  ActivateAddAdvertComp: boolean=false;
  advert: any; 
  AdvertList:any=[];
  page=1;
  fieldsEnabled: boolean=false;

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
      this.currentIndex=-1;
      this.currentAdvertisement={};
      this.fieldsEnabled=false;
  }
  setActiveTutorial(advert: any, index: number): void {
    this.currentAdvertisement = advert;
    this.currentIndex = index;
    this.fieldsEnabled=false;
  }


  handlePageChange(event: any) {
    this.page = event;
  }

  getFullAdvert(id: number){
    this.fieldsEnabled=true;
    this.service.getAdvertById(id, this.fieldsEnabled).subscribe(data=>
      {
        this.currentAdvertisement={};
        this.currentAdvertisement=data;
        console.log(this.currentAdvertisement.photoLinksNames);
      });
      
  }

  getSorted(){
    this.service.getAdvertListSorted().subscribe(data=>
      {
        this.AdvertList=data;
      })
      this.currentIndex=-1;
      this.currentAdvertisement={};
      this.fieldsEnabled=false;
  }

  getSortedDesc(){
    this.service.getAdvertListSortedDesc().subscribe(data=>
      {
        this.AdvertList=data;
      })
      this.currentIndex=-1;
      this.currentAdvertisement={};
      this.fieldsEnabled=false;
  }
}
