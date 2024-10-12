import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'invoice_lines'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {

      //no se modifica nada
      table.bigIncrements('invoice_line_id')
      table.bigInteger('invoice_id').unsigned().references('invoice_id').inTable('invoices')
      table.bigInteger('track_id').unsigned().references('track_id').inTable('tracks')
      table.decimal('unit_price', 10, 2)
      table.integer('quantity')
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).nullable() 
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}