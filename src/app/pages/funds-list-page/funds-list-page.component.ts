import { Component, OnInit } from '@angular/core';
import {Fund} from "../../models/Fund";

@Component({
  selector: 'app-funds-list-page',
  templateUrl: './funds-list-page.component.html',
  styleUrls: ['./funds-list-page.component.scss']
})
export class FundsListPageComponent implements OnInit {

  funds: Fund[] = [new Fund("fund1", "fund1", "fund1"),
                  new Fund("fund2", "fund2", "fund2")];

  constructor() { }

  ngOnInit(): void {
  }

}
