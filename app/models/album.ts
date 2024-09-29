import Artist from '#models/artist'
import Track from '#models/track'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'

export default class Album extends BaseModel {
  @column({ isPrimary: true })
  declare albumId: number

  @column()
  declare title: string

  @column()
  declare artistId: number

  @belongsTo(() => Artist, {
    foreignKey: 'artistId',
  })
  declare artist: BelongsTo<typeof Artist>

  @hasMany(() => Track, {
    foreignKey: 'albumId',
  })
  declare tracks: HasMany<typeof Track>
}