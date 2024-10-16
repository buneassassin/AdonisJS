import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'invoices'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('invoice_id')
      table.bigInteger('customer_id').unsigned().references('customer_id').inTable('customers')
      /*table.dateTime('invoice_date')
      table.string('billing_address', 70)
      table.string('billing_city', 40)
      table.string('billing_state', 40)
      table.string('billing_country', 40)
      table.string('billing_postal_code', 10)*/
      table.decimal('total', 10, 2)
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).nullable()
      table.timestamp('deleted_at', { useTz: true }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}