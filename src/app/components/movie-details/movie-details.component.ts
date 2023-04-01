import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  getMovieDetailResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;


  constructor(private service:MovieApiService,private router:ActivatedRoute){}

  ngOnInit():void{
    let getParamId= this.router.snapshot.paramMap.get('id')
     this.getMovie(getParamId);
     this.getVideo(getParamId);
     this.getMovieCast(getParamId);
  }

  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((result)=>{
      // console.log(result);
      this.getMovieDetailResult=result;

    })
  }


  getVideo(id:any){

    this.service.getMovieVideo(id).subscribe((result)=>{
      // console.log(result,"tvideo");
      result.results.forEach((element:any)=>{
       if(element.type==="Trailer"){
        this.getMovieVideoResult=element.key;
      // console.log(this.getMovieVideoResult,"tvideo");

       }
      })
      
      
    })

  }

  getMovieCast(id:any){
    this.service.getMovieCast(id).subscribe((result)=>{
      // console.log(result,"cast");
      this.getMovieCastResult=result.cast;
      
    })

  }
}
