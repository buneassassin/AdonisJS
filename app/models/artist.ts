import Album from '#models/album'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Artist extends BaseModel {

  //Nada que borrar

  @column({ isPrimary: true })
  declare artistId: number

  @column()
  declare name: string

  @hasMany(() => Album, {
    foreignKey: 'artistId',
  })
  declare albums: HasMany<typeof Album>
  
  @column.dateTime({ autoUpdate: false })
  declare deletedAt: DateTime | null
}