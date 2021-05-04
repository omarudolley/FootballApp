import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls:['./paginate.component.css']
  
})
export class PaginateComponent implements OnInit {

  pagesCount?:number;
  pages?:any[];
  @Input() itemsCount?:number;
  @Input() pageSize?:number;
  @Input() currentPage?:number;


  @Output() onPageChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    if (this.itemsCount && this.pageSize && this.currentPage ){
      this.pagesCount = Math.ceil(this.itemsCount / this.pageSize)
      this.pages =  _.range(1,this.pagesCount+1)
    }
   
  }


  changePage(prop: number) {
    this.onPageChange.emit(prop)
  }

}
