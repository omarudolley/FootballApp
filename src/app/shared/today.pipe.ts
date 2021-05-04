import { Pipe, PipeTransform } from '@angular/core';
import{DatePipe} from '@angular/common'


@Pipe({
  name: 'dayCheck',
})
export class TodayPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const today = new Date()
    const datePipe = new DatePipe("en-US");
    const isToday = datePipe.transform(value, 'MMM-dd-yyyy') === datePipe.transform(today,'MMM-dd-yyyy')
    if ( isToday ){
          return "Today"
    }else{
      
      return datePipe.transform(value, 'MMM/dd');
    }
  }
}

