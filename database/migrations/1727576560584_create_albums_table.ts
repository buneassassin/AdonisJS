import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'albums'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {

      //no se modifica nada
      table.bigIncrements('album_id')
      table.string('title', 160)
      table.bigInteger('artist_id').unsigned().references('artist_id').inTable('artists')
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).nullable() 
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}