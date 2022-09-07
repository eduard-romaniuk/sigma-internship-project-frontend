import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../../../pages/funds-list-page/funds-list-page.component";

@Component({
  selector: 'app-add-fund-dialog',
  templateUrl: './add-fund-dialog.component.html',
  styleUrls: ['./add-fund-dialog.component.scss']
})
export class AddFundDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddFundDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}


  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
