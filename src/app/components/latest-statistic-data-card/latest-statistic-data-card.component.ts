import { Component, OnInit } from '@angular/core';
import { LatestStatisticData } from 'src/app/models/LatestStatisticData';
import { StatisticDataService } from 'src/app/services/statistic-data.service';

@Component({
  selector: 'app-latest-statistic-data-card',
  templateUrl: './latest-statistic-data-card.component.html',
  styleUrls: ['./latest-statistic-data-card.component.scss']
})
export class LatestStatisticDataCardComponent implements OnInit {

  statisticData: LatestStatisticData | undefined;

  constructor(private statisticDataService: StatisticDataService) { }

  ngOnInit(): void {
    this.statisticDataService.getLatestStatisticData().subscribe(data => {
      this.statisticData = data;
    })
  }

}
