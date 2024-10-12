import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Persona extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  public nombre: string = ""

  @column()
  public apellido_paterno: string = ""

  @column()
  public apellido_materno: string = ""


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}