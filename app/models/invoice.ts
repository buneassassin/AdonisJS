// import { DateTime } from 'luxon'
import Customer from '#models/customer'
import InvoiceLine from '#models/invoiceline'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column ,hasMany, belongsTo} from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Invoice extends BaseModel {
  @column({ isPrimary: true })
  declare invoiceId: number
/*
  @column()
  declare invoiceDate: DateTime

  @column()
  declare billingAddress: string

  @column()
  declare billingCity: string

  @column()
  declare billingState: string

  @column()
  declare billingCountry: string

  @column()
  declare billingPostalCode: string
  */

  @column()
  declare total: number

  @column()
  declare customerId: number

  @belongsTo(() => Customer, {
    foreignKey: 'customerId',
  })
  declare customer: BelongsTo<typeof Customer>

  @hasMany(() => InvoiceLine, {
    foreignKey: 'invoiceId',
  })
  declare invoiceLines: HasMany<typeof InvoiceLine>

  @column.dateTime({ autoUpdate: false })
  declare deletedAt: DateTime | null
}