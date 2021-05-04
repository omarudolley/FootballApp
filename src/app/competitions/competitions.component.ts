import { Component, OnInit } from '@angular/core';



import { DataService } from "../core/data.service";

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
 
})
export class CompetitionsComponent implements OnInit {

  Competitions: any = [];
  currentDate = new Date()

  constructor(
    public service:DataService,

  ) { }

  ngOnInit(): void {
    this.loadCompetitions()
  }


  // Get Competitions list
  loadCompetitions() {
    return this.service.getCompetitions().subscribe(data => {
      this.Competitions= data.competitions.filter( (item:any) => [2000, 2001, 2002, 2003, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2021].includes(item.id))
    })
  }

}
