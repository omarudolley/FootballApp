import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common'


import { DataService } from "../core/data.service";

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls:['./match-detail.component.css']

})
export class MatchDetailComponent implements OnInit {

  MatchDetail:any={}
  state:any = this.location.getState()
   
  constructor(
    public service:DataService,
    public router:Router,
    public actRoute: ActivatedRoute,
    public location:Location
  ) { }

  ngOnInit(): void {
    this.loadMatchDetails()
  }


  // Get Matches list
  loadMatchDetails() {
    return this.service.getMatchDetail(this.state.id).subscribe(data => {
      this.MatchDetail = data.match;
      console.log(data.match)
    })
  }

}
