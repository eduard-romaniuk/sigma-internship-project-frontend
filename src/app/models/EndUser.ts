import { Locale } from "./Locale"
import { Role } from "../enums/role"
import { Subscription } from "../enums/subscription"

export class EndUser {
  id: number = 0
  name: string
  email: string
  locale: Locale
  role: Role
  subscription: Subscription

  constructor(name: string, email: string, locale: Locale, role: Role, subscription: Subscription) {
    this.name = name
    this.email = email
    this.locale = locale
    this.role = role
    this.subscription = subscription
  }
}