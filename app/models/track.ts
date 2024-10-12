import Album from '#models/album'
import Genre from '#models/genre'
import MediaType from '#models/mediatype'
import InvoiceLine from '#models/invoiceline'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany, belongsTo } from '@adonisjs/lucid/orm'

export default class Track extends BaseModel {
  @column({ isPrimary: true })
  declare trackId: number

  @column()
  declare name: string

  @column()
  declare albumId: number

  @column()
  declare mediaTypeId: number

  @column()
  declare genreId: number

//  @column()
  //declare composer: string

//  @column()
  //declare milliseconds: number

  //@column()
  //declare bytes: number

//  @column()
  //declare unitPrice: number

  @belongsTo(() => Album, {
    foreignKey: 'albumId',
  })
  declare album: BelongsTo<typeof Album>

  @belongsTo(() => Genre, {
    foreignKey: 'genreId',
  })
  declare genre: BelongsTo<typeof Genre>

  @belongsTo(() => MediaType, {
    foreignKey: 'mediaTypeId',
  })
  declare mediaType: BelongsTo<typeof MediaType>

  @hasMany(() => InvoiceLine, {
    foreignKey: 'trackId',
  })
  declare invoiceLines: HasMany<typeof InvoiceLine>
}