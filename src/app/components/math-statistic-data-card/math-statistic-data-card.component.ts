import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { LossType } from 'src/app/enums/loss-type';
import { CalculatedStatisticData } from 'src/app/models/CalculatedStatisticData';
import { LossDay } from 'src/app/models/LossDay';
import { AuthService } from 'src/app/services/auth.service';
import { StatisticDataService } from 'src/app/services/statistic-data.service';

@Component({
  selector: 'app-math-statistic-data-card',
  templateUrl: './math-statistic-data-card.component.html',
  styleUrls: ['./math-statistic-data-card.component.scss']
})
export class MathStatisticDataCardComponent implements OnInit {

  isLoggedIn: boolean = false;

  lossTypes: Array<string> = Object.keys(LossType).filter(key => isNaN(+key));
  currentLossType: string = this.lossTypes[LossType.personnel_units];

  lossDays: LossDay[] = [];

  calculatedStatisticData: CalculatedStatisticData | undefined;

  public barChartLegend = false;

  public barChartData: ChartConfiguration<'bar'>['data'] | undefined;

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true
  };

  constructor(private statisticDataService: StatisticDataService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.initContent();
    this.isLoggedIn = this.authService.isUserLoggedIn();
  }

  changeLossType(selecedLossType: string) {
    this.currentLossType = selecedLossType;
    this.initContent();
  }

  initContent() {
    this.statisticDataService.getLossDays(this.currentLossType).subscribe(data => {
      this.lossDays = data;

      this.barChartData = {
        labels: this.lossDays.map(e => e.date),
        datasets: [
          { data: this.lossDays.map(e => e.lossAmount), label: 'Date' }
        ]
      };
    })

    this.statisticDataService.getCalculatedStatisticData(this.currentLossType).subscribe(data => {
      this.calculatedStatisticData = data;
      this.calculatedStatisticData.mean = Math.round(this.calculatedStatisticData.mean * 100) / 100
      this.calculatedStatisticData.median = Math.round(this.calculatedStatisticData.median * 100) / 100
    })
  }
}
