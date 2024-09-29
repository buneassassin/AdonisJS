import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tracks'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('track_id')
      table.string('name', 200)
      table.bigInteger('album_id').unsigned().references('album_id').inTable('albums').nullable()
      table.bigInteger('media_type_id').unsigned().references('media_type_id').inTable('media_types')
      table.bigInteger('genre_id').unsigned().references('genre_id').inTable('genres')
      table.string('composer', 220)
      table.integer('milliseconds')
      table.integer('bytes')
      table.decimal('unit_price', 10, 2)
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).nullable() 
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}