import { Component, OnInit } from '@angular/core';
import { Fund } from "../../models/Fund";
import { MatDialog } from "@angular/material/dialog";
import { EditDialogComponent } from "../../components/dialogs/edit-dialog/edit-dialog.component";
import { FundService } from "../../services/fund.service";
import { AddFundDialogComponent } from "../../components/dialogs/add-fund-dialog/add-fund-dialog.component";

export interface DialogDataAdd {
  title: string;
  name: string;
  description: string;
  link: string;
}

export interface DialogDataEdit {
  title: string;
  id: number;
  name: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-funds-list-page',
  templateUrl: './funds-list-page.component.html',
  styleUrls: ['./funds-list-page.component.scss']
})
export class FundsListPageComponent implements OnInit {

  funds!: Fund[];

  name: string = "";
  description: string = "";
  link: string = "";

  constructor(public dialog: MatDialog, private fundService: FundService) {
    this.fundService.getFunds().subscribe((funds: Fund[]) => this.funds = funds);
  }

  ngOnInit(): void {

  }

  openDialogEdit(id: number, name: string, description: string, link: string,): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '600px',
      data: { title: "Edit Fund", id, name, description, link },
      panelClass: 'custom-dialog'
    });

    dialogRef.afterClosed().subscribe(editedFund => {
      console.log('The dialog was closed');
      let index = this.funds.findIndex(fund => fund.id === id);
      this.funds[index] = editedFund;
    });
  }

  openDialogAdd(): void {
    const dialogRef = this.dialog.open(AddFundDialogComponent, {
      width: '600px',
      data: { title: "Add new Fund", name: this.name, desc: this.description, link: this.link },
      panelClass: 'custom-dialog'
    });

    dialogRef.afterClosed().subscribe(newFund => {
      console.log('The dialog was closed');
      console.log(newFund.name + " " + newFund.description + " " + newFund.link + " ")
      this.funds.push(newFund);
    });
  }

  deleteFund(id: number) {
    this.fundService.deleteFund(id).subscribe(() => {
      let index = this.funds.findIndex(fund => fund.id === id);
      this.funds.splice(index, 1);
    });
  }

}
