import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Invoice from '#models/invoice'
import Track from '#models/track'
import { BaseModel, column, belongsTo} from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Invoiceline extends BaseModel {
   public static table = 'invoice_lines'
  //nada que modificar
  @column({ isPrimary: true })
  declare invoiceLineId: number

  @column()
  declare invoiceId: number

  @column()
  declare trackId: number

  @column()
  declare unitPrice: number

  @column()
  declare quantity: number

  @belongsTo(() => Invoice, {
    foreignKey: 'invoiceId',
  })
  declare invoice: BelongsTo<typeof Invoice>

  @belongsTo(() => Track, {
    foreignKey: 'trackId',
  })
  declare track: BelongsTo<typeof Track>

  @column.dateTime({ autoUpdate: false })
  declare deletedAt: DateTime | null
}