import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



import * as _ from "lodash";


import { DataService } from "../core/data.service";

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']

})
export class MatchesComponent implements OnInit {

  pageSize:number;
  currentPage:number;
  itemsCount?:number;
  isLoaded:boolean;
  Matches:any =[]
  paginatedMatches:any=[]
  code:string;
  duration?:string;
 
 

  constructor(
    public service: DataService, 
    public router: Router,
    public actRoute: ActivatedRoute,
 
  ) { 
    this.pageSize = 10
    this.currentPage = 1
    this.isLoaded = false
    this.code = ''+ this.actRoute.snapshot.paramMap.get('competition-name');
  
  }

  ngOnInit(): void {
    this.loadLiveMatches()
    this.loadMatches()
   

  }

    // Get Matches list
    loadMatches() {
      return this.service.getMatches(this.code).subscribe(data => {
        const fixturedMatches= data.matches.map((item:any)=> ({...item, slug: item.homeTeam.name.replace(/ /g,'-').toLowerCase()+"-vs-"+item.awayTeam.name.replace(/ /g,'-').toLowerCase()}))
        this.Matches.push(...fixturedMatches)
        this.itemsCount = parseInt(this.Matches.length)
        this.paginate(this.Matches)
        this.isLoaded = true
      
      })
    }

     // Get Live Matches list
     loadLiveMatches() {
      return this.service.getLiveMatches(this.code).subscribe(data => {
        this.Matches = data.matches.map((item:any)=> ({...item , slug: item.homeTeam.name.replace(/ /g,'-').toLowerCase()+"-vs-"+item.awayTeam.name.replace(/ /g,'-').toLowerCase()}))
      
      })
    }

    // paginate page
    paginate(matches:any[]){
      let startIndex = (this.currentPage - 1) * this.pageSize;
      this.paginatedMatches = _(matches).slice(startIndex).take(this.pageSize).value()
    }

    // update current page
    setCurrentPage($event:number){
      this.currentPage = $event
      this.paginate(this.Matches)
    }

  

}
