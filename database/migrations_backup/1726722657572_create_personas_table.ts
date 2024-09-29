import { BaseSchema } from '@adonisjs/lucid/schema'
export default class extends BaseSchema {
  protected tableName = 'personas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre', 60).notNullable()
      table.string('apellido_paterno', 60).notNullable()
      table.string('apellido_materno', 60)
      table.timestamp('created_at').defaultTo(this.now()).notNullable()
      table.timestamp('updated_at').nullable().defaultTo(null);
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}