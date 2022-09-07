import {Component, OnInit} from '@angular/core';
import {Fund} from "../../models/Fund";
import {MatDialog} from "@angular/material/dialog";
import {EditDialogComponent} from "../../components/dialogs/edit-dialog/edit-dialog.component";
import {FundService} from "../../services/fund.service";
import {AddFundDialogComponent} from "../../components/dialogs/add-funf-dialog/add-fund-dialog.component";

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

  openDialogEdit(id: any): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '600px',
      data: {title: "Edit Fund", name: this.name, desc: this.description, link: this.link, id},
      panelClass: 'custom-dialog'
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  openDialogAdd(): void {
    const dialogRef = this.dialog.open(AddFundDialogComponent, {
      width: '600px',
      data: {title: "Add new Fund", name: this.name, desc: this.description, link: this.link},
      panelClass: 'custom-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result.name + " " + result.description + " " + result.link + " ")
      this.fundService.addFund(new Fund(result.name, result.description, result.link))
    });
  }

  deleteFund(id: number) {
    this.fundService.deleteFund(id).subscribe(() => {
        window.location.reload();
      },
      () => {});
  }

}
