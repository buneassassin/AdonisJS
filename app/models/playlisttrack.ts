import Playlist from '#models/playlist'
import Track from '#models/playlist'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Playlisttrack extends BaseModel {
   public static table = 'playlist_tracks'
  @column({ isPrimary: true })
  declare playlistId: number

  @column()
  declare trackId: number

  @belongsTo(() => Playlist, {
    foreignKey: 'playlistId',
  })
  declare playlist: BelongsTo<typeof Playlist>

  @belongsTo(() => Track, {
    foreignKey: 'trackId',
  })
  declare track: BelongsTo<typeof Track>

  @column.dateTime({ autoUpdate: false })
  declare deletedAt: DateTime | null
}