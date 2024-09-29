import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'employees'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('employee_id')
      table.string('last_name', 20)
      table.string('first_name', 30)
      table.string('title', 30)
      table.bigInteger('reports_to').unsigned().references('employee_id').inTable('employees').nullable()
      table.dateTime('birth_date')
      table.dateTime('hire_date')
      table.string('address', 70)
      table.string('city', 40)
      table.string('state', 40)
      table.string('country', 40)
      table.string('postal_code', 10)
      table.string('phone', 24)
      table.string('fax', 24)
      table.string('email', 60)
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).nullable() 
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}