import Track from '#models/track'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'

export default class Mediatype extends BaseModel {
  @column({ isPrimary: true })
  declare mediaTypeId: number

  @column()
  declare name: string

  @hasMany(() => Track, {
    foreignKey: 'mediaTypeId',
  })
  declare tracks: HasMany<typeof Track>
}