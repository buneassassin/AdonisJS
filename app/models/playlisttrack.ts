import Playlist from '#models/playlist'
import Track from '#models/playlist'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'

export default class Playlisttrack extends BaseModel {
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
}