export class Locale {
  id: number = 0
  name: string
  iso_code: string

  constructor(name: string, iso_code: string) {
    this.name = name
    this.iso_code = iso_code
  }
}