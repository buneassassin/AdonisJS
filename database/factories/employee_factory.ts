import factory from '@adonisjs/lucid/factories'
import Employee from '#models/employee'

export const EmployeeFactory = factory
  .define(Employee, async ({ faker }) => {
    return {
      firstName: faker.person.firstName(),
      email: faker.internet.email(),
    }
  })
  .build()