import { Component } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  
  bannerResult:any=[];

  constructor(private service:MovieApiService){}

  
  ngOnInit():void{
   this.bannerData();
  }
  
  
  
   bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
     this.bannerResult=result.results;    
    })
  
   }
}
