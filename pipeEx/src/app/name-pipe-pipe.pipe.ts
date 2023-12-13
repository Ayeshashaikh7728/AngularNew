import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namePipePipe'
})
export class NamePipePipePipe implements PipeTransform {

  transform(value: string,before:string,after:string): string {
    //let newName=`${before} ${value} ${after}`;
 
    let newName=before+" "+value+" "+after
 
    return newName
  }
}
