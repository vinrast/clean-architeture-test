export default class Customer {
  private id?: string
  private name: string
  private dni: string
  private email: string

  constructor(name: string, dni: string, email: string) {
    this.id = null
    this.name = name
    this.dni = dni
    this.email = email
  }
}
