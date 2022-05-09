import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly ApiUrl="https://localhost:44328/api"
  constructor(private http:HttpClient) { }
  
  
  getAdvertList():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/Advertisement')
  }
  getAdvertListSorted():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/Advertisement/sortByPrice')
  }

  getAdvertListSortedDesc():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/Advertisement/sortByPriceDesc')
  }
  addAdvert(val: any){
    return this.http.post(this.ApiUrl+"/Advertisement", val);
  }

  getAdvertById(val:any, fields:boolean){
    return this.http.get<any>(this.ApiUrl+'/Advertisement/'+val+"?fields="+fields)
  }
}
