import {Component, OnInit} from '@angular/core';
import {Fund} from "../../models/Fund";
import {MatDialog} from "@angular/material/dialog";
import {EditDialogComponent} from "../../components/dialogs/edit-dialog/edit-dialog.component";
import {FundService} from "../../services/fund.service";
import {AddFundDialogComponent} from "../../components/dialogs/add-funf-dialog/add-fund-dialog.component";

export interface DialogData {
  title: string;
  name: string;
  desc: string;
  link: string;
}

@Component({
  selector: 'app-funds-list-page',
  templateUrl: './funds-list-page.component.html',
  styleUrls: ['./funds-list-page.component.scss']
})
export class FundsListPageComponent implements OnInit {

  funds: Fund[] | undefined;

  name: string = "";
  desc: string = "";
  link: string = "";

  constructor(public dialog: MatDialog, public fundService: FundService) {
    this.fundService.getFunds().subscribe((funds) => this.funds = funds);
  }

  openDialogEdit(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '600px',
      data: {title: "Edit Fund", name: this.name, desc: this.desc, link: this.link},
      panelClass: 'custom-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result.name + " " + result.desc + " " + result.link + " ")
    });
  }

  openDialogAdd(): void {
    const dialogRef = this.dialog.open(AddFundDialogComponent, {
      width: '600px',
      data: {title: "Add new Fund", name: this.name, desc: this.desc, link: this.link},
      panelClass: 'custom-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result.name + " " + result.desc + " " + result.link + " ")
      this.fundService.addFund(result);
    });
  }

  ngOnInit(): void {
  }

}
