import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer, interval } from 'rxjs'
import { PollingService } from '../polling.service'

@Component({
  selector: 'app-polling',
  templateUrl: './polling.component.html',
  styleUrls: ['./polling.component.css']
})
export class PollingComponent implements OnInit {
  pollingData: any;   
  pollingstatus: string;

  constructor(private pollingService: PollingService) {     
  }

  ngOnInit(): void {
    this.pollingService.getOnlineStatus().subscribe(isOnline => {
       if(isOnline === true){
        this.pollingData = interval(1000).subscribe(() => {
          this.pollingstatus = "Polling Started";
          console.log("Internet available and Polling Started");
        })
       }
       else{        
        this.pollingData.unsubscribe();
        this.pollingstatus = "Polling Stopped";
        console.log("No Internet connection and Polling stopped");
       }
    });
  }
}