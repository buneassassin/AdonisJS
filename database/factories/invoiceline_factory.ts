import factory from '@adonisjs/lucid/factories'
import Invoiceline from '#models/invoiceline'
import { InvoiceFactory } from './invoice_factory.js'
import { TrackFactory } from './track_factory.js'

export const InvoicelineFactory = factory
  .define(Invoiceline, async ({ faker }) => {
    return {
      invoiceId: (await InvoiceFactory.create()).invoiceId,
      trackId: (await TrackFactory.create()).trackId,
      unitPrice: parseFloat(faker.finance.amount({min: 1, max: 100, dec: 2})),
      quantity: parseFloat(faker.finance.amount({min: 1, max: 10, dec: 0})),

    }
  })
  .build()