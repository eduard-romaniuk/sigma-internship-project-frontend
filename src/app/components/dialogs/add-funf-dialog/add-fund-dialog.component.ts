import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogDataAdd} from "../../../pages/funds-list-page/funds-list-page.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FundService} from "../../../services/fund.service";
import {Fund} from 'src/app/models/Fund';

@Component({
  selector: 'app-add-fund-dialog',
  templateUrl: './add-fund-dialog.component.html',
  styleUrls: ['./add-fund-dialog.component.scss']
})
export class AddFundDialogComponent implements OnInit {
  form: FormGroup;
  pattern =  '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  showError = false;

  constructor(
    public dialogRef: MatDialogRef<AddFundDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataAdd,
    private fundService: FundService
  ) {
    this.form = new FormGroup({
      "name": new FormControl('', [Validators.required]),
      "description": new FormControl('', [Validators.required]),
      "link": new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
    });
  }


  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (this.form.valid) {
      let fund = new Fund(
        this.form.value.name,
        this.form.value.description,
        this.form.value.link
      )
      this.fundService.addFund(fund).subscribe(() => {
        this.dialogRef.close();
      },
      () => {
        this.showError = true;
      });
    }
  }
}
