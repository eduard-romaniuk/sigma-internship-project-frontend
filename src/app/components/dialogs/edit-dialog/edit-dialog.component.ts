import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogDataEdit} from "../../../pages/funds-list-page/funds-list-page.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FundService} from "../../../services/fund.service";
import {Fund} from "../../../models/Fund";

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  form: FormGroup;
  pattern =  '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  showError = false;

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataEdit,
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

  save(id: number): void {
    if (this.form.valid) {
      let fund = new Fund(
        this.form.value.name,
        this.form.value.description,
        this.form.value.link
      )
      fund.id = id;
      this.fundService.updateFund(fund, id).subscribe(() => {
          window.location.reload();
          this.dialogRef.close();
        },
        () => {
          this.showError = true;
        });
    }
  }
}
