import factory from '@adonisjs/lucid/factories'
import Customer from '#models/customer'
import { EmployeeFactory } from './employee_factory.js'

export const CustomerFactory = factory
  .define(Customer, async ({ faker }) => {
    return {
      firstName: faker.person.firstName(),
      email: faker.internet.email(),
      supportRepId: (await EmployeeFactory.create()).employeeId,
    }
  })
  .build()