import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Customer extends BaseModel {
  @column({ isPrimary: true })
  declare customerId: number

  @column()
  declare firstName: string
/*
  @column()
  declare lastName: string

  /*@column()
  declare company: string

  @column()
  declare address: string

  @column()
  declare city: string

  @column()
  declare state: string

  @column()
  declare country: string

  @column()
  declare postalCode: string

  @column()
  declare phone: string

  @column()
  declare fax: string
*/
  @column()
  declare email: string

  @column()
  declare supportRepId: number  // no se toca

  @column.dateTime({ autoUpdate: false })
  declare deletedAt: DateTime | null
}