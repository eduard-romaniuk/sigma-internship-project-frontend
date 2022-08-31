export class LossDay {
  date: Date
  lossAmount: number

  constructor(date: Date, lossAmount: number) {
    this.date = date
    this.lossAmount = lossAmount
  }
}