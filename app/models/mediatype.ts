import Track from '#models/track'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Mediatype extends BaseModel {
  public static table = 'media_types'
  //nada que modificar
  @column({ isPrimary: true })
  declare mediaTypeId: number

  @column()
  declare name: string

  @hasMany(() => Track, {
    foreignKey: 'mediaTypeId',
  })
  declare tracks: HasMany<typeof Track>

  @column.dateTime({ autoUpdate: false })
  declare deletedAt: DateTime | null
}