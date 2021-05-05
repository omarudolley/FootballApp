import { Pipe, PipeTransform } from '@angular/core';
import{DatePipe} from '@angular/common'

@Pipe({
  name: 'timeToGo'
})
export class TimeToGoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    const today = new Date()
    const datePipe = new DatePipe("en-US");

    const isToday = datePipe.transform(value, 'MMM-dd-yyyy') === datePipe.transform(today,'MMM-dd-yyyy')
    
    
    if ( isToday ){
        const date = new Date(value)
        const   diff = (( date.getTime() - (new Date()).getTime()) / 1000)
        const hrdiff = Math.floor(diff / 3600);
        return `Starts In ${hrdiff}h`
    }else{
      return datePipe.transform(value, 'h:mm a'); 
    }
  }

}


