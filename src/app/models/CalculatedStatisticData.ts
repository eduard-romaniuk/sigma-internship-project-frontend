export class CalculatedStatisticData {
  max: number
  min: number
  mean: number
  median: number

  constructor(max: number, min: number, mean: number, median: number) {
    this.max = max
    this.min = min
    this.mean = mean
    this.median = median
  }
}