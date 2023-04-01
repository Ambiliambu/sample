import { Component } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.css']
})
export class TrendingMoviesComponent {

  trendingMoviesResult:any=[];

  constructor(private service:MovieApiService){}

  ngOnInit():void{
    this.trendingData();
   }
 
  trendingData(){
    this.service.trendingMoviesApiData().subscribe((result)=>{
      this.trendingMoviesResult=result.results;    
     })
   
  }
  

}
