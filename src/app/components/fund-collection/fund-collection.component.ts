import { Component, OnInit } from '@angular/core';
import { Fund } from 'src/app/models/Fund';
import { FundService } from 'src/app/services/fund.service';

@Component({
  selector: 'app-fund-collection',
  templateUrl: './fund-collection.component.html',
  styleUrls: ['./fund-collection.component.scss']
})
export class FundCollectionComponent implements OnInit {

  funds: Fund[] = [];

  constructor(private fundService: FundService) {
  }

  ngOnInit(): void {
    this.fundService.getFunds().subscribe(data => {
      this.funds = data;
    })
  }

}
