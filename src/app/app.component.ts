import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'hotel-booking-and-analytics-system';
  constructor(private dashboardService: DashboardService){}


  ngOnInit(): void {
     this.dashboardService.getUser().subscribe(res=> {
      console.log(res);
    })

    this.dashboardService.getServerSentEventDashboad().subscribe()
    this.dashboardService.message$.subscribe((msg) => {
      console.log('message :- ', msg);
    })
  }
}
