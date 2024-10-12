import factory from '@adonisjs/lucid/factories'
import Invoice from '#models/invoice'
import { CustomerFactory } from './customer_factory.js'

export const InvoiceFactory = factory
  .define(Invoice, async ({ faker }) => {
    return {
      total: parseFloat(faker.finance.amount()),
      customerId: (await CustomerFactory.create()).customerId,

    }
  })
  .build()