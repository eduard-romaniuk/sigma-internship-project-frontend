export class LossDay {
  date: string
  lossAmount: number

  constructor(date: string, lossAmount: number) {
    this.date = date
    this.lossAmount = lossAmount
  }
}