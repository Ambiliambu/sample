import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchForm=new FormGroup({
    "movieName":new FormControl(null)
  })


  searchResult:any=[];

  constructor(private service:MovieApiService){}

  ngOnInit():void{
    this.submitForm();
   }

  submitForm(){
    // console.log(this.searchForm.value);
    this.service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
    this.searchResult=result.results;
    })
    
  }
}
