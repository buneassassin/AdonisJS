import PlaylistTrack from '#models/playlisttrack'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Playlist extends BaseModel {
  @column({ isPrimary: true })
  declare playlistId: number

  @column()
  declare name: string

  @hasMany(() => PlaylistTrack, {
    foreignKey: 'playlistId',
  })
  declare playlistTracks: HasMany<typeof PlaylistTrack>

  @column.dateTime({ autoUpdate: false })
  declare deletedAt: DateTime | null

  
}