// import { DateTime } from 'luxon'
import Customer from '#models/customer'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'

export default class Employee extends BaseModel {
  @column({ isPrimary: true })
  declare employeeId: number

//  @column()
  //declare lastName: string

  @column()
  declare firstName: string
/*
  @column()
  declare title: string

  @column()
  declare reportsTo: number

  @column()
  declare birthDate: DateTime

  @column()
  declare hireDate: DateTime

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

  @hasMany(() => Customer, {
    foreignKey: 'supportRepId',
  })
  declare customers: HasMany<typeof Customer>
}