import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'media_types'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      //no se modifica nada
      table.bigIncrements('media_type_id')
      table.string('name', 200)
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).nullable() 
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}