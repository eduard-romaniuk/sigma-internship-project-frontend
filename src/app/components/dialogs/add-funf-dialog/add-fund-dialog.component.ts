import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../../../pages/funds-list-page/funds-list-page.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FundService} from "../../../services/fund.service";

@Component({
  selector: 'app-add-fund-dialog',
  templateUrl: './add-fund-dialog.component.html',
  styleUrls: ['./add-fund-dialog.component.scss']
})
export class AddFundDialogComponent implements OnInit {
  form: FormGroup;
  pattern =  '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  fundService: FundService;

  constructor(
    public dialogRef: MatDialogRef<AddFundDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    fundService: FundService
  ) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      link: new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
    });
    this.fundService = fundService;
  }


  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    const {value, valid} = this.form;
    if(valid){
      console.log(value);
      this.dialogRef.close(value);
    }
  }
}
