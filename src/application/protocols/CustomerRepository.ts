import Customer from '../../domain/Customer';

export default interface CustomerRepository {
    add(customerInstance: Customer):Promise<Customer>
}
