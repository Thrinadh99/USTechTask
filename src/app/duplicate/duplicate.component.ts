import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duplicate',
  templateUrl: './duplicate.component.html',
  styleUrls: ['./duplicate.component.css']
})
export class DuplicateComponent implements OnInit {
  duplicateArray = [10,11,8,9,12,23,11,8,7,10,12];
  usingForEach: any;
  usingReduce: any;
  usingForOf: any;
  constructor() { }

  ngOnInit(): void {    
    this.usingForEach = this.removeusingForEach(this.duplicateArray);
    this.usingForOf = this.removeusingForOf(this.duplicateArray)
    this.usingReduce = this.removeusingReduce(this.duplicateArray);  
  }

  removeusingForEach(Array){
    let emptyArray = [];
    Array.forEach(element => {
      if(!emptyArray.includes(element)){
        emptyArray.push(element);
      }
    });
    return emptyArray;    
  }

  removeusingForOf(array){
    var emptyArray = [];
    for(var value of array){
        if(emptyArray.indexOf(value) === -1){
          emptyArray.push(value);
        }
    }
    return emptyArray;
}

  removeusingReduce(Array){
    // let emptyArray = Array.reduce((a,b) =>{
    //   if(a.indexOf(b) < 0) a.push(b);
    //   return a;
    // }, []);
    // return emptyArray;
    return Array.reduce((a,b) => a.includes(b) ? a : [...a, b], []);
  }
}
