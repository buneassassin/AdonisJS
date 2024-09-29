import Track from '#models/track'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'

export default class Genre extends BaseModel {
  @column({ isPrimary: true })
  declare genreId: number

  @column()
  declare name: string

  @hasMany(() => Track, {
    foreignKey: 'genreId',
  })
  declare tracks: HasMany<typeof Track>
}