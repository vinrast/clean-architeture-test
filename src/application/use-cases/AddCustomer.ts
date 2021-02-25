import Customer from '../../domain/Customer'
import CustomerRepository from '../protocols/CustomerRepository'

export default class AddCustomer {
    private repository: CustomerRepository
    constructor(customerRepository: CustomerRepository){
        this.repository = customerRepository
    }

    public async execute(name: string, dni:string, email:string): Promise<Customer>{
        let newCustomer = new Customer(name, dni, email)
        newCustomer = await this.repository.add(newCustomer)
        return newCustomer
    }
}
