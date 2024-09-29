import Album from '#models/album'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'

export default class Artist extends BaseModel {
  @column({ isPrimary: true })
  declare artistId: number

  @column()
  declare name: string

  @hasMany(() => Album, {
    foreignKey: 'artistId',
  })
  declare albums: HasMany<typeof Album>
}