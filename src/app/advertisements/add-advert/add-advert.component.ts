import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-advert',
  templateUrl: './add-advert.component.html',
  styleUrls: ['./add-advert.component.css']
})
export class AddAdvertComponent implements OnInit {

  constructor(private service: SharedService) { }
 @Input() 
 formModel={
  Id: 0,
  Name: "",
  Price: 0,
  Description: "",
  Link1: "",
  Link2:  "",
  Link3: ""
 }
 

PhotoLinks: string[]=[];

  ngOnInit(): void {
  }

  addAdvert(formModel:NgForm){
    var val={
      Id: this.formModel.Id,
      Name:this.formModel.Name,
      Description:this.formModel.Description,
      Price: this.formModel.Price,
      PhotoLinksNames: [this.formModel.Link1, this.formModel.Link2, this.formModel.Link3]
    }
    this.service.addAdvert(val).subscribe(res=>{
      alert("You added advert succesfully");
    });
  }

}
