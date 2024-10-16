import Track from '#models/track'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Genre extends BaseModel {
  @column({ isPrimary: true })
  declare genreId: number

  @column()
  declare name: string

  @hasMany(() => Track, {
    foreignKey: 'genreId',
  })
  declare tracks: HasMany<typeof Track>

  @column.dateTime({ autoUpdate: false })
  declare deletedAt: DateTime | null
}